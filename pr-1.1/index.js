
const http = require('http')
const port = 8000;

const fs = require('fs');
const { log } = require('console');

const handleRequest = (req, res) => {
    let url = req.url;
    let file = "";
    switch (url) {
        case '/':
            file = './index.html'
            break;
        case '/home':
            file = './home.html'
            break;
        case '/about':
            file = './about.html'
            break;
        case '/product':
            file = './product.html'
            break;
        case '/contact':
            file = './contact.html'
            break;
        default:
            file = './404.html'
            break;
    }

    fs.readFile(file, (err, data) => {

        res.end(data)
    })
}
const server = http.createServer(handleRequest)
server.listen(port, (err) => {
    if (err) {
        console.log("server invlid");
        return false;
    }
    else {
        console.log("server succesfully started");
    }
})
