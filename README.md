# ConfecXpress CRM

Dashboard para gestão de pedidos, custos, fluxo de caixa e notificações.

## Estrutura

- `/backend` – API em Node.js + Express + MongoDB  
- `/frontend` – SPA em React + Vite  

## Como rodar local

### 1. Backend
```bash
cd backend
cp .env.example .env
# preencha MONGO_URI e OPENAI_API_KEY
npm install
npm run dev
