import { Especialistas } from '../model/especialistas.js';
import { AsientosClinicos } from '../model/asientosclinicos.js';
import { Pacientes } from '../model/pacientes.js';

//Función crear Asiento Clinico

const createAsientosClinicos = async (req, res) => {
    try {

        const {
            fecha,
            antecedentes,
            acto_profesional,
            otras_informaciones,
            pacienteId,
            especialistaId

        } = req.body;
        const asientoclinico = AsientosClinicos.findByPk(asientoclinicoId);
        if(
            !asientoclinico
        ){
            return res.status(400).json({
               error:'El asunto clinico es inválido'
            });
        };
        const nuevoasientoclinico = await AsientosClinicos.create({
            fecha,
            antecedentes,
            acto_profesional,
            otras_informaciones,
            pacienteId,
            especialistaId


        });
        console.log(nuevoasientoclinico);

        res.send("asiento clinico creado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todos los Asientos Clinicos


const getAsientosClinicos = async (req, res) => {
    try {
        const asientosclinicos = await AsientosClinicos.findAll();
        console.log(asientosclinicos);
        res.json(asientosclinicos);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion de visualizar por id

const getAsientoClinico = async (req, res) => {
    try {
        
        const { id } = req.params;
        const asientoclinico = await AsientosClinicos.findByPk(id);
        if (!asientoclinico) {
            return res.status(400).json({ error: 'El asiento clinico no existe' })
        }
        console.log(asientoclinico);
        res.json(asientoclinico);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};



//Borrar Asiento Clinico
const deleteAsientoClinico = async (req, res) => {
    try {
        const { id } = req.params;
        const asientoclinico = await AsientosClinicos.findByPk(id);
        if (!asientoclinico) {
            return res.status(400).json({ error: 'El asiento clinico no existe' })
        }

        await AsientosClinicos.destroy({
            where: {
                id
            },
        });
        res.send("asiento clinico borrado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};




//Funcion de modificar un Asiento Clinico
const putAsientoClinico = async (req, res) => {

    try {
        const { id } = req.params;

        const {
            fecha,
            antecedentes,
            acto_profesional,
            otras_informaciones,
            pacienteId,
            especialistaId

        } = req.body;


        const asientoclinico = await AsientosClinicos.findByPk(id);
        
        if (!asientoclinico) {
            return res.status(400).json({ error: 'El asiento clinico es inválido' })
        }
        asientoclinico.fecha = fecha;
        asientoclinico.antecedentes = antecedentes;
        asientoclinico.acto_profesional = acto_profesional;
        asientoclinico.otras_informaciones = otras_informaciones;
        asientoclinico.pacienteId = pacienteId;
        asientoclinico.especialistaId = especialistaId


        await asientoclinico.save();
        res.json(asientoclinico);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}











export { createAsientosClinicos, getAsientosClinicos, getAsientoClinico, deleteAsientoClinico, putAsientoClinico };