import { Especialistas } from '../model/especialistas.js';
import { Consultorios } from '../model/consultorios.js';
import { Pacientes } from '../model/pacientes.js';
import { HistoriasClinicas } from '../model/historiasclinicas.js';
import { Asientos } from '../model/asientos.js';


//Función crear un consultorio
const createConsultorios = async (req, res) => {

    try {
        const {
            piso,
            numero

        } = req.body;

        const nuevoConsultorio = await Consultorios.create({
            piso,
            numero

        });
        console.log(nuevoConsultorio);

        res.send("Consultorio creado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todos los consultorios
const getConsultorios = async (req, res) => {
    try {
        const consultorios = await Consultorios.findAll();
        console.log(consultorios);
        res.json(consultorios);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion visualizar consultorio por id 

const getConsultorio = async (req, res) => {
    try {
        const { id } = req.params;
        const consultorio = await Consultorios.findByPk(id);
        console.log(consultorio);
        res.json(consultorio);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };


};


//Borrar Consultorio
const deleteConsultorio = async (req, res) => {
    try {
        const { id } = req.params;

        const especialistasAsignados = await Especialistas.findAll({
            where: {
                consultorioId: id,
            },
        });

        if (especialistasAsignados.length > 0) {
            return res.status(400).json({ error: 'El consultorio está asignado a algún especialista' })
        }

        await Consultorios.destroy({
            where: {
                id
            },
        });
        res.send("Consultorio borrado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};


//Funcion de modificar un Consultorio
const putConsultorio = async (req, res) => {

    try {
        const { id } = req.params;

        const {
            piso,
            numero

        } = req.body;


        const consultorio = await Consultorios.findByPk(id);

        if (!consultorio) {
            return res.status(400).json({ error: 'El consultorio es inválido' })
        }
        consultorio.piso = piso;
        consultorio.numero = numero;
        await consultorio.save();
        res.json(consultorio);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}



//Exportar funciones
export { createConsultorios, getConsultorios, getConsultorio, deleteConsultorio, putConsultorio };