import express from 'express';
import routes from './Routers/route.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3002;

app.use(bodyParser.json())
app.use('/', routes);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);

});




