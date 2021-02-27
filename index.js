const http = require('http');
const app = require('./app');
const { connect_to_db } = require('./db/index');
require('dotenv').config();

const server = http.createServer(app);

server.listen(process.env.PORT, 'localhost', (error) => {
	if (error) throw error;
	console.log('SERVER IS LIVE');
	console.log(`LISTENING ON PORT ${process.env.PORT}`);
});

connect_to_db().then(() => {
	console.log('--------------');
});
