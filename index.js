const express = require('express');
const mongoose = require('mongoose');
const os = require('os');
const apiRoutes = require('./routes/api');

const app = express();

const PORT = process.env.PORT || 3000;

const networkInterfaces = os.networkInterfaces();
let ipAddress = '';

Object.keys(networkInterfaces).forEach((interfaceName) => {
    networkInterfaces[interfaceName].forEach((iface) => {
        if (iface.family === 'IPv4' && !iface.internal) {
            ipAddress = iface.address;
        }
    });
});

if (!ipAddress) {
    ipAddress = 'localhost';
}

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://${ipAddress}:${PORT}`);
});
