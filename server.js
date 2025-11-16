const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

const cartFile = './data/cart_data.json';

if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
if (!fs.existsSync(cartFile)) {
    fs.writeFileSync(cartFile, '[]');
}

app.get('/api/cart', (req, res) => {
    const cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
    res.json(cart);
});

app.post('/api/cart/add', (req, res) => {
    const product = req.body;
    const cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
    
    cart.push(product);
    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));
    
    console.log('Added:', product.name);
    res.json({ success: true });
});

app.post('/api/cart/remove', (req, res) => {
    const productName = req.body.name;
    let cart = JSON.parse(fs.readFileSync(cartFile, 'utf8'));
    
    cart = cart.filter(item => item.name !== productName);
    fs.writeFileSync(cartFile, JSON.stringify(cart, null, 2));
    
    console.log('Removed:', productName);
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});