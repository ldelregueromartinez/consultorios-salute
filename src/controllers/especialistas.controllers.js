import { Especialistas } from '../model/especialistas.js';
import { Consultorios } from '../model/consultorios.js';

//Función crear Especialistas

const createEspecialistas = async (req, res) => {
    try {

        const {
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            matricula,
            especialidad,
            fechaIngreso,
            fechaEgreso,
            consultorioId

        } = req.body;
        const consultorio = Consultorios.findByPk(consultorioId);
        if(
            !consultorio
        ){
            return res.status(400).json({
               error:'El consultorio es inválido'
            });
        };
        const nuevoEspecialista = await Especialistas.create({
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            matricula,
            especialidad,
            fechaIngreso,
            fechaEgreso,
            consultorioId


        });
        console.log(nuevoEspecialista);

        res.send("Especialista creado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};


// Funcion de visualizar todos los especialistas


const getEspecialistas = async (req, res) => {
    try {
        const especialistas = await Especialistas.findAll();
        console.log(especialistas);
        res.json(especialistas);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

// Funcion de visualizar por id

const getEspecialista = async (req, res) => {
    try {
        
        const { id } = req.params;
        const especialista = await Especialistas.findByPk(id);
        if (!especialista) {
            return res.status(400).json({ error: 'El especialista no existe' })
        }
        console.log(especialista);
        res.json(especialista);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};



//Borrar Especialista
const deleteEspecialista = async (req, res) => {
    try {
        const { id } = req.params;
        const especialista = await Especialistas.findByPk(id);
        if (!especialista) {
            return res.status(400).json({ error: 'El especialista no existe' })
        }

        await Especialistas.destroy({
            where: {
                id
            },
        });
        res.send("Especialista borrado");
    } catch (error) {
        return res.status(500).json({ message: error.message })
    };

};




//Funcion de modificar un especialista
const putEspecialista = async (req, res) => {

    try {
        const { id } = req.params;

        const {
            nombre,
            apellido,
            direccion,
            telefono,
            dni,
            fecha_nac,
            matricula,
            especialidad,
            fechaIngreso,
            fechaEgreso,
            consultorioId

        } = req.body;


        const especialista = await Choferes.findByPk(id);
        
        if (!especialista) {
            return res.status(400).json({ error: 'El Chofer es inválido' })
        }
        especialista.nombre = nombre;
        especialista.apellido = apellido;
        especialista.direccion = direccion;
        especialista.telefono = telefono;
        especialista.dni = dni;
        especialista.fecha_nac = fecha_nac;
        especialista.matricula = matricula;
        especialista.especialidad = especialidad;
        especialista.fechaIngreso = fechaIngreso;
        especialista.fechaEgreso = fechaEgreso;
        especialista.consultorioId = consultorioId;


        await especialista.save();
        res.json(especialista);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}











export { createEspecialistas, getEspecialistas, getEspecialista, deleteEspecialista, putEspecialista };