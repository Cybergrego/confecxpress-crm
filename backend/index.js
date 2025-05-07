import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ordersRouter from './routes/orders.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(console.error);

app.use('/api/orders', ordersRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Backend rodando na porta ${PORT}`));
