import path from 'path';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

var port = process.env.PORT || 8888;

app.use(express.static(path.join(__dirname, '../build')))
app.get('/ping', (req, res) => res.send('Hello World, Server OK.'));

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});