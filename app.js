const express = require('express');
const cors = require('cors');
const tratamentsRoutes = require('./routes/tratamentsRoutes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));//habilita o acesso a partir de qualquer(*) rota
app.use('/trataments', tratamentsRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));