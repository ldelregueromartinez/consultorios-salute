import { Router } from 'express';
import { createHistoriasClinicas, deleteHistoriaClinica, getHistoriaClinica, getHistoriasClinicas, putHistoriaClinica } from '../controllers/historiasclinicas.controllers.js';

const router = Router();

//Rutas

router.get('/historiasclinicas', getHistoriasClinicas );
router.post('/historiasclinicas', createHistoriasClinicas );
router.put('/historiasclinicas/:id', putHistoriaClinica);
router.delete('/historiasclinicas/:id',deleteHistoriaClinica);
router.get('/historiasclinicas/:id', getHistoriaClinica );


export default router;
