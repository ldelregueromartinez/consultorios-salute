import { Router } from 'express';
import { createPacientes, deletePaciente, getPaciente, getPacientes, putPaciente } from '../controllers/pacientes.controllers.js';

const router = Router();

//Rutas

router.get('/pacientes', getPacientes );
router.post('/pacientes', createPacientes );
router.put('/pacientes/:id', putPaciente);
router.delete('/pacientes/:id',deletePaciente);
router.get('/pacientes/:id', getPaciente);


export default router;
