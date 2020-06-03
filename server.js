const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', 'index.html');
    const readStream = fs.createReadStream(filePath);

    res.writeHead(200, {
        'Content-Type': "text/html"
    });
    readStream.pipe(res);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});