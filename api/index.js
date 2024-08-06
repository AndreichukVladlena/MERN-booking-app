const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
require('dotenv').config();
const app = express();

<<<<<<< HEAD
const bcryptSalt = bcrypt.genSaltSync(10);

=======
>>>>>>> 209444d3180306b936d1f2f0d4579b3004812f3f
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;

<<<<<<< HEAD
    console.log(typeof(bcryptSalt));

    const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
=======
    const userDoc = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
>>>>>>> 209444d3180306b936d1f2f0d4579b3004812f3f
    });


    res.json(userDoc);
});

app.listen(4000);
//ahyqbXetDrSzH6h0