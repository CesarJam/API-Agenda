const functions = require('firebase-functions');
const express = require('express')
const admin = require('firebase-admin');
const cors = require('cors');



admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://agenda-jsp-default-rtdb.firebaseio.com'
});

const app = express();
// Permitir CORS para todas las rutas
app.use(cors());

app.get('/hello', (req, resp) => {
    return resp.status(200).json({ message: 'hola' })
});

app.use(require('./routes/agenda.routes'))

exports.app = functions.https.onRequest(app);