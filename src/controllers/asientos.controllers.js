import { Asientos } from '../model/asientos.js';
import { Especialistas } from '../model/especialistas.js';

//Función crear Asiento Clinico

const createAsientos = async (req, res) => {
    try {

        const {
            fecha,
            antecedentes,
            acto_profesional,
            otras_informaciones,
            pacienteId,
            especialistaId

        } = req.body;
        const asiento = Asientos.findByPk(asientoId);
        if(
            !asiento
        ){
            return res.status(400).json({
               error:'El asunto clinico es inválido'
            });
        };
        const nuevoasiento = await Asientos.create({
            fecha,
            antecedentes,
            acto_profesional,
            otras_informaciones,
            pacienteId,
            especialistaId


        });
        console.log(nuevoasiento);

        res.send("asiento clinico creado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todos los Asientos Clinicos


const getAsientos = async (req, res) => {
    try {
        const asientos = await Asientos.findAll();
        console.log(asientos);
        res.json(asientos);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion de visualizar por id

const getAsiento = async (req, res) => {
    try {
        
        const { id } = req.params;
        const asiento = await Asientos.findByPk(id);
        if (!asiento) {
            return res.status(400).json({ error: 'El asiento clinico no existe' })
        }
        console.log(asiento);
        res.json(asiento);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};



//Borrar Asiento Clinico
const deleteAsiento = async (req, res) => {
    try {
        const { id } = req.params;
        const asiento = await Asientos.findByPk(id);
        if (!asiento) {
            return res.status(400).json({ error: 'El asiento clinico no existe' })
        }

        await Asientos.destroy({
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
const putAsiento = async (req, res) => {

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


        const asiento = await Asientos.findByPk(id);
        
        if (!asiento) {
            return res.status(400).json({ error: 'El asiento clinico es inválido' })
        }
        asiento.fecha = fecha;
        asiento.antecedentes = antecedentes;
        asiento.acto_profesional = acto_profesional;
        asiento.otras_informaciones = otras_informaciones;
        asiento.pacienteId = pacienteId;
        asiento.especialistaId = especialistaId


        await asiento.save();
        res.json(asiento);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


};


export { createAsientos, getAsientos, getAsiento, deleteAsiento, putAsiento };