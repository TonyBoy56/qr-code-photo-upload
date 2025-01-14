import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 3000;

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src/')))

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'))
});

// Example of an API endpoint
// app.get('/api/data', (req, res) => {
//     res.json({ message: 'Hello from the server!' });
// });

// Start the server
app.listen(port, () => {
    open(`http://localhost:${port}`)
    console.log(`Server is running at http://localhost:${port}`)
});