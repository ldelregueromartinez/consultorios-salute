import { Especialistas } from '../model/especialistas.js';
import { Consultorios } from '../model/consultorios.js';
import { Pacientes } from '../model/pacientes.js';
import { HistoriasClinicas } from '../model/historiasclinicas.js';
import { Asientos } from '../model/asientos.js';

//Función crear Historias Clinicas

const createHistoriasClinicas = async (req, res) => {
    try {

        const {
            asientoclinicoId,
            pacienteId

        } = req.body;


        const paciente = Pacientes.findByPk(pacienteId);
        if(
            !paciente
        ){
            return res.status(400).json({
               error:'El paciente es inválido'
            });
        };



        const asiento = Asientos.findByPk(asientoclinicoId);
        if(
            !asiento
        ){
            return res.status(400).json({
               error:'El asiento clinico es inválido'
            });
        };



        const nuevaHistoriaClinica = await HistoriasClinicas.create({
            asientoclinicoId,
            pacienteId


        });
        console.log(nuevaHistoriaClinica);

        res.send("Historia Clinica creada");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todas las Historias Clinicas


const getHistoriasClinicas = async (req, res) => {
    try {
        const historiasclinicas = await HistoriasClinicas.findAll();
        console.log(historiasclinicas);
        res.json(historiasclinicas);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion de visualizar por id

const getHistoriaClinica = async (req, res) => {
    try {
        
        const { id } = req.params;
        const historiaclinica = await HistoriasClinicas.findByPk(id);
        if (!historiaclinica) {
            return res.status(400).json({ error: 'El historia clinica no existe' })
        }
        console.log(historiaclinica);
        res.json(historiaclinica);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};



//Borrar Historia Clincia
const deleteHistoriaClinica = async (req, res) => {
    try {
        const { id } = req.params;
        const historiaclinica = await HistoriasClinicas.findByPk(id);
        if (!historiaclinica) {
            return res.status(400).json({ error: 'La historia clinica no existe' })
        }

        await HistoriasClinicas.destroy({
            where: {
                id
            },
        });
        res.send("historia clinica borrada");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};




//Funcion de modificar una Historia Clinica
const putHistoriaClinica = async (req, res) => {

    try {
        const { id } = req.params;

        const {
            asientoclinicoId,
            pacienteId

        } = req.body;


        const historiaclinica = await HistoriasClinicas.findByPk(id);
        
        if (!historiaclinica) {
            return res.status(400).json({ error: 'La historia clinica es inválida' })
        }

        historiaclinica.asientoclinicoId = asientoclinicoId;
        historiaclinica.pacienteId = pacienteId


        await historiaclinica.save();
        res.json(historiaclinica);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}











export { createHistoriasClinicas, getHistoriasClinicas, getHistoriaClinica, deleteHistoriaClinica, putHistoriaClinica };