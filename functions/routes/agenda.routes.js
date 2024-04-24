const {Router} = require('express')
const router = Router()

const admin = require('firebase-admin');

const db = admin.firestore();

router.post('/api/agenda', async (req, res) => {
    try {
        // Recoger datos del cuerpo de la solicitud
        const { nombre, tipo, detalle, telefonoCelular, telefonoFijo, paginaWeb, correo, facebook, direccion } = req.body;

        // Validar campos requeridos (opcional, pero recomendado)
        if (!nombre || !telefonoCelular) {
            return res.status(400).json({ error: 'Nombre y telefono celular son requeridos' });
        }

        await db.collection('agenda')
            .doc()  // Deja que Firestore genere el ID del documento
            .set({
                nombre: nombre,
                tipo: tipo,
                detalle: detalle,
                telefonoCelular: telefonoCelular,
                telefonoFijo: telefonoFijo,
                paginaWeb: paginaWeb,
                correo: correo,
                facebook: facebook,
                direccion: direccion,
                createdAt: new Date() // Agregar fecha de creación
            });
        return res.status(201).json({ message: 'Contacto creado exitosamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al crear el contacto' });
    }
})

router.get('/api/agenda', async (req, res) => {
    try {
        const query = db.collection('agenda');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            nombre: doc.data().nombre,
            tipo: doc.data().tipo,
            detalle: doc.data().detalle,
            telefonoCelular: doc.data().telefonoCelular,
            telefonoFijo: doc.data().telefonoFijo,
            paginaWeb: doc.data().paginaWeb,
            correo: doc.data().correo,
            facebook: doc.data().facebook,
            direccion: doc.data().direccion
        }))
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error al consultar el contacto' });
    }
})
router.delete("/api/agenda/:id", async (req, res) => {
    try {
        const document = db.collection("agenda").doc(req.params.id);
        await document.delete();
        res.status(200).json({ message: 'Documento eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al eliminar el contacto' });
    }
})

router.put("/api/agenda/:id", async (req, res) => {
    try {
        const document = db.collection("agenda").doc(req.params.id);
        await document.update({
            nombre: req.body.nombre,
            tipo: req.body.tipo,
            detalle: req.body.detalle,
            telefonoCelular: req.body.telefonoCelular,
            telefonoFijo: req.body.telefonoFijo,
            paginaWeb: req.body.paginaWeb,
            correo: req.body.correo,
            facebook: req.body.facebook,
            direccion: req.body.direccion
        });
        return res.status(200).json({ message: 'Documento actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({ error: 'Error al actualizar el contacto' });
    }
})
module.exports = router