const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    fs.readFile('./public/index.html', (err, data) => {
        if (err) {
            console.error(`File reading error: ${err}`);
        } else {
            res.writeHead(200, {
                'Content-Type': "text/html"
            });
            res.write(data, 'utf-8');
            res.end();
        }
    });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});