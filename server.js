import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';
// import QRCode from 'qrcode'
import { config } from 'dotenv';

// Load 
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const ipAddress = process.env.IP_ADDRESS;
const port = process.env.port;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src/')))

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

// Start the server
app.listen(port, () => {
    open(`http://${ipAddress}:${port}`);
    console.log(`Server is running at `);
    console.log(`Server IP: ${ipAddress}`, typeof(ipAddress));
});