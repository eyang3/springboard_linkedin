const restana = require('restana');
const service = restana();
const apiKey = process.env.API_KEY;

service.get('/hi', (req, res) => {
  res.send('Hello World!');
});

service.start(3000).then(() => {
  console.log('Restana server is running on port 3000');
});
