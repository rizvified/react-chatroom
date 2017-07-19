const userNames = require('../utils/helpers');

module.exports = (socket) => {
  const name = userNames.getGuestName();

  socket.emit('init', {
    name,
    users: userNames.get(),
  });

  // broadcast a user's message to other users
  socket.on('send:message', (data) => {
    socket.broadcast.emit('send:message', {
      user: name,
      text: data.text,
    });
  });

  // notify other clients that a new user has joined
  socket.broadcast.emit('user:join', {
    name,
  });

  // clean up when a user leaves, and broadcast it to other users
  socket.on('disconnect', () => {
    socket.broadcast.emit('user:left', {
      name,
    });
    userNames.free(name);
  });
};
