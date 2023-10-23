import { Especialistas } from '../model/especialistas.js';
import { Consultorios } from '../model/consultorios.js';
import { Pacientes } from '../model/pacientes.js';
import { HistoriasClinicas } from '../model/historiasclinicas.js';
import { Asientos } from '../model/asientos.js';


//Función crear Pacientes

const createPacientes = async (req, res) => {
    try {

        const {
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            fechaIngreso,
            fechaEgreso,
            especialistaId

        } = req.body;
        const especialista = Especialistas.findByPk(especialistaId);
        if(
            !especialista
        ){
            return res.status(400).json({
               error:'El Especialista es inválido'
            });
        };
        const nuevoPaciente = await Pacientes.create({
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            fechaIngreso,
            fechaEgreso,
            especialistaId


        });
        console.log(nuevoPaciente);

        res.send("Paciente creado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todos los pacientes


const getPacientes = async (req, res) => {
    try {
        const pacientes = await Pacientes.findAll();
        console.log(pacientes);
        res.json(pacientes);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion de visualizar por id

const getPaciente = async (req, res) => {
    try {
        
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente no existe' })
        }
        console.log(paciente);
        res.json(paciente);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};



//Borrar Paciente
const deletePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente no existe' })
        }

        await Pacientes.destroy({
            where: {
                id
            },
        });
        res.send("paciente borrado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};




//Funcion de modificar un paciente
const putPaciente = async (req, res) => {

    try {
        const { id } = req.params;

        const {
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            fechaIngreso,
            fechaEgreso,
            especialistaId

        } = req.body;


        const paciente = await Pacientes.findByPk(id);
        
        if (!paciente) {
            return res.status(400).json({ error: 'El paciente es inválido' })
        }
        paciente.nombre = nombre;
        paciente.apellido = apellido;
        paciente.direccion = direccion;
        paciente.telefono = telefono;
        paciente.dni = dni;
        paciente.fecha_nac = fecha_nac;
        paciente.fechaIngreso = fechaIngreso;
        paciente.fechaEgreso = fechaEgreso;
        paciente.especialistaId = especialistaId;


        await paciente.save();
        res.json(paciente);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}











export { createPacientes, getPacientes, getPaciente, deletePaciente, putPaciente };