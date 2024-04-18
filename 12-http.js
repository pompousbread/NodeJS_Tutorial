const http = require('http');

const server = http.createServer((req, res) =>{
    //console.log(req)
    // == typecast
    // === checking both type and value. (What you will normally want.)
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }

    if(req.url === '/about'){
        res.end('Here is our short history!')
    }
    
    //This line seems to be a problem.  Not sure why
    res.end(`<h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    
})

server.listen(5000)