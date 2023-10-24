import { Router } from 'express';
import { createEspecialistas, deleteEspecialista, getEspecialista, getEspecialistas, putEspecialista } from '../controllers/especialistas.controllers.js';

const router = Router();

//Rutas

router.get('/especialistas', getEspecialistas );
router.post('/especialistas', createEspecialistas );
router.put('/especialistas/:id', putEspecialista);
router.delete('/especialistas/:id',deleteEspecialista);
router.get('/especialistas/:id', getEspecialista );


export default router;

