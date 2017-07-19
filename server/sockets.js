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
};
