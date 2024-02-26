const mongoose = require('mongoose');

const bd_url = 'mongodb://127.0.0.1:27017/rosabeauty';

mongoose.connect(bd_url)
.then(()=> console.log('Base de Datos Mongo Conectada'))
.catch(err => console.log(err));