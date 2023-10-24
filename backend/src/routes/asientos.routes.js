import { Router } from 'express';
import { createAsientos, deleteAsiento, getAsiento, getAsientos, putAsiento } from '../controllers/asientos.controllers.js';

const router = Router();

//Rutas

router.get('/asientos', getAsientos );
router.post('/asientos', createAsientos );
router.put('/asientos/:id', putAsiento);
router.delete('/asientos/:id',deleteAsiento);
router.get('/asientos/:id', getAsiento );


export default router;
