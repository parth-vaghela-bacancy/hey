import http from 'http';
import app from './app.js';
import 'dotenv/config';

const port = process.env.PORT || 3001;

const server = http.createServer(app);

app.listen(port, (req, res) => {
	console.log(`app starts on ${port}`);
});