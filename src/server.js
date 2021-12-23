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
// app.use('/site',express.static(path.join(path.resolve(__dirname,'..'), 'site')))

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 4000);