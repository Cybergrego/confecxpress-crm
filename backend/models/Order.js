import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
  client: String,
  items: [{ qty: Number, type: String }],
  cost: Number,
  price: Number,
  status: String,
  timeline: [{ step: String, date: Date }]
}, { timestamps: true });

export default model('Order', OrderSchema);
