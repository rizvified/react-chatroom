const http = require('http');
const io = require('socket.io');

const Server = require('./server.js');
const Socket = require('./sockets.js');

const port = (process.env.PORT || 3000);
const server = http.createServer(Server.app());

io.listen(server).sockets.on('connection', Socket);

server.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
