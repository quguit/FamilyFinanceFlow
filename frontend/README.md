
---

## ✅ 📌 Resumo do Frontend (FamilyFinanceFlow)

**Objetivo:** App web/mobile para controle financeiro familiar.
**Funcionalidades principais:**

### 1. **Cadastro de pessoas da família**

* Nome, email (opcional), cor/avatar

### 2. **Cadastro de entradas fixas**

* Salário, pensão, outros
* Pessoa associada

### 3. **Cadastro de despesas fixas**

* Aluguel, seguro, celular, internet

### 4. **Despesas parceladas**

* Compra → valor + parcelas → cria eventos futuros automaticamente

### 5. **Divisão de despesas**

* Seleciona quem vai pagar e quanto (divisão igual ou personalizada)

### 6. **Relatório mensal**

* Entradas - saídas = saldo por mês
* Gráfico de linha (Chart.js) mostrando saldo futuro

### 7. **Compras futuras**

* Lista de desejos → visível quando há sobra de dinheiro

---

## 🧩 1. Tecnologias do Frontend

| Tecnologia                    | Finalidade                                                            |
| ----------------------------- | --------------------------------------------------------------------- |
| **React + Vite**              | Base da SPA                                                           |
| **Chakra UI**                 | Estilização responsiva e simples                                      |
| **React Router DOM**          | Rotas                                                                 |
| **React Hook Form / Zod**     | Formulários com validação                                             |
| **Axios**                     | Comunicação com backend                                               |
| **Chart.js**                  | Gráficos mensais                                                      |
| **React Query (opcional)**    | Cache das requisições                                                 |
| **PWA (Progressive Web App)** | Acesso no celular via Wi-Fi, com ícone e funcionamento offline básico |

---

## 📱 2. Acessar via celular na mesma rede Wi-Fi

No frontend, rode com:

```bash
npm run dev --host
```

A Vite vai disponibilizar algo como:

```
➜  Network:  http://192.168.0.101:5173/
```

📲 Acesse esse IP pelo navegador do celular conectado na mesma rede Wi-Fi.

---

## ⚒️ 3. Formato do MVP

### Telas principais (MVP):

1. **Login / Usuário único (simples por enquanto)**
2. **Dashboard geral** (saldo atual e gráfico de próximos meses)
3. **Cadastro de entrada**
4. **Cadastro de despesa fixa**
5. **Cadastro de despesa parcelada**
6. **Lista de pessoas e divisão**
7. **Planejamento de compra futura**

### Fluxo inicial:

* Cadastrar usuários
* Cadastrar entradas (fixas)
* Cadastrar contas fixas
* Adicionar despesas parceladas
* Visualizar fluxo de saldo por mês (gráfico)
* Exibir planejamento de compras quando houver sobra

---

## 🗃️ Estrutura de diretórios no Frontend

```
src/
├── components/
├── pages/
│   ├── Dashboard.jsx
│   ├── Entradas.jsx
│   ├── Despesas.jsx
│   ├── Parceladas.jsx
│   ├── Pessoas.jsx
│   ├── Planejamento.jsx
├── services/
│   └── api.js
├── hooks/
├── App.jsx
├── main.jsx
```

---

## ✍️ Etapas

| Etapa | TO DO                                        |
| ----- | ------------------------------------------------- |
| 1     | Login simples e criação de estrutura base         |
| 2     | Cadastro de pessoas e entradas fixas              |
| 3     | Cadastro de despesas fixas e parceladas           |
| 4     | Divisão de despesas entre pessoas                 |
| 5     | Gráfico de saldo por mês com Chart.js             |
| 6     | Página de planejamento de compras futuras         |
| 7     | Deploy local (localhost via Wi-Fi) e PWA opcional |

---

## ☁️ 4. Deploy 
