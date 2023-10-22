import { Router } from 'express';
import { createAsientosClinicos, deleteAsientoClinico, getAsientoClinico, getAsientosClinicos, putAsientoClinico } from '../controllers/asientosclinicos.controllers.js';

const router = Router();

//Rutas

router.get('/asientosclinicos', getAsientosClinicos );
router.post('/asientosclinicos', createAsientosClinicos );
router.put('/asientosclinicoss/:id', putAsientoClinico);
router.delete('/asientosclinicos/:id',deleteAsientoClinico);
router.get('/asientosclinicos/:id', getAsientoClinico );


export default router;
