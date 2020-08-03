const { say, get_random } = require('../pkg/ssvm_nodejs_starter_lib.js');

const http = require('http');
const url = require('url');
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  const example = `Please use command curl http://${hostname}:${port}/?name=MyName or\nPlease use command curl http://${hostname}:${port}/?name=random \n`
  if (!queryObject['name']) {
    res.end(example);
  } else {
    if (queryObject['name'] != 'random'){
      res.end(say(queryObject['name']) + '\n');
    } else {
      res.end(get_random());
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
