const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Carpeta pública para archivos estáticos
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/products', (req, res) => {
    res.render('products');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});


// Productos, autenticación y otras rutas aquí

app.listen(port, () => {
  console.log(`3Dynamik escuchando en http://localhost:${port}`);
});

