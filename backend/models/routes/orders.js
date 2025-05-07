import { Router } from 'express';
import Order from '../models/Order.js';

const router = Router();

// listar
router.get('/', async (_, res) => {
  const all = await Order.find();
  res.json(all);
});

// criar
router.post('/', async (req, res) => {
  const o = new Order(req.body);
  await o.save();
  res.status(201).json(o);
});

// atualizar status
router.patch('/:id', async (req, res) => {
  const u = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(u);
});

export default router;
