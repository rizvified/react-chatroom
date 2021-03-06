// Keep track of which names are used so that there are no duplicates
const userNames = (function () {
  const names = {};

  const claim = (name) => {
    if (!name || names[name]) {
      return false;
    }
    names[name] = true;
    return true;
  };

  // find the lowest unused "guest" name and claim it
  const getGuestName = () => {
    let name;
    let nextUserId = 1;

    do {
      name = `Guest ${nextUserId}`;
      nextUserId += 1;
    } while (!claim(name));

    return name;
  };

  // serialize claimed names as an array
  const get = () => {
    const res = [];
    for (user in names) {
      res.push(user);
    }

    return res;
  };

  const free = (name) => {
    if (names[name]) {
      delete names[name];
    }
  };

  return {
    get,
    getGuestName,
    free,
  };
}());

module.exports = userNames;
