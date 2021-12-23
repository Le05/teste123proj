const express = require('express');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

require('./database');
const app = express();

app.use(cors());
app.use(express.json());
// verifica as rotas quando tiverem session
app.use('/',routes);
app.use('/site',express.static(path.join(path.resolve(__dirname,'..'), 'site/')))

app.listen(process.env.PORT || 4000);