const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;
  if (url === "/about") {
    res.write("<h1>About Us Page</h1>");
  } else if (url === "/contact") {
    res.write("<h1>Contact Us Page</h1>");
  } else {
    res.write("<h1>Hello World!</h1>");
    res.write("<h2>My name Maks</h2>");
  }
  res.end();
});

server.listen(port, () => {
  console.log(`server start at http://localhost:${port}/`);
});
