import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

// Start the server
app.listen(port, () => {
    open(`http://localhost:${port}`)
    console.log(`Server is running at http://localhost:${port}`)
});