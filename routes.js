const fs = require('fs');
requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write("<html>");
        res.write("<head><title>Fill Form</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (data) => {
            body.push(data);
        });
        return req.on('end', () => {
            const finalString = Buffer.concat(body).toString();
            const message = finalString.split("=")[1]
            fs.writeFile('file.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

    }
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>Title</title></head>");
    res.write("<body>hello</body>");
    res.write("</html>");
    res.end();
}

module.exports = {
    requestHandler
}