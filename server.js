const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const filePath = path.join(
        __dirname,
        'public',
        url === '/'
            ? 'index.html'
            : url
    );
    const extName = path.extname(filePath);

    let contentType = 'text/html';

    // Set correct content type for the header
    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.ico':
            contentType = 'image/ico';
            break;
        case '.svg':
            contentType = 'image/svg+xml';
            break;
    }

    if (extName.length === 0) {
        console.log(`Not reading file: ${filePath}`);
    } else {
        console.log(`Reading file: ${filePath}`);
        console.log(`Extension name: ${extName}`);
        console.log(`Content type: ${contentType}`);

        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log(`File reading error: ${err}`)
            } else {
                res.writeHead(200, {
                    'Content-Type': contentType
                });
                res.write(data);
                res.end();
            }
        });
    }

    console.log("--------------------------------------------------");
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});