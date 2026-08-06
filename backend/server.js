const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
	res.json({ status: 200, message: 'API is healthy' })
});

app.listen(process.env.PORT, () => {
	console.log('API started')
});
