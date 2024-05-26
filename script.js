






const http = require('http');
const url = require('url');

let homePageViews = 0;
let aboutPageViews = 0;


const server = http.createServer((req, res) => {
    
    const parsedUrl = url.parse(req.url, true);
    
    const pathname = parsedUrl.pathname;

    if (pathname === '/') {
        
        homePageViews++;
       
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1>Home Page</h1>
                    <p>This page has been viewed ${homePageViews} times.</p>
                    <a href="/about">Go to About Page</a>
                </body>
            </html>
        `);
       
        res.end();

    
    } else if (pathname === '/about') {
        
        aboutPageViews++;
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write(`
            <html>
                <head>
                    <title>About</title>
                </head>
                <body>
                    <h1>About Page</h1>
                    <p>This page has been viewed ${aboutPageViews} times.</p>
                    <a href="/">Go to Home Page</a>
                </body>
            </html>
        `);
        
        res.end();

    
    } else {
        
        res.writeHead(404, { 'Content-Type': 'text/html' });
        
        res.write(`
            <html>
                <head>
                    <title>404 Not Found</title>
                </head>
                <body>
                    <h1>404 Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <a href="/">Go to Home Page</a>
                </body>
            </html>
        `);
       
        res.end();
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
