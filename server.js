const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.write("Hello, I'm Ritam Chakraborty");
    res.end();
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});