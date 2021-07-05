const server = require('./server.js');

const port = process.env.PORT || 4500;
server.listen(port, () => {
  console.log("\n*** API running on port 4.5k ***\n");
});