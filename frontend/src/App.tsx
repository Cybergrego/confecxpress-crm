import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Order = {
  _id: string;
  client: string;
  price: number;
  cost: number;
  status: string;
};

export default function App() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios.get<Order[]>('/api/orders').then(r => setOrders(r.data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard de Pedidos</h1>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Preço</th>
            <th>Custo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o._id}>
              <td>{o.client}</td>
              <td>R$ {o.price.toFixed(2)}</td>
              <td>R$ {o.cost.toFixed(2)}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
