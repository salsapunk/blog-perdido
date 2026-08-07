import e from "express";
import 'dotenv/config';
import userRouter from "./src/user/user.routes.js";

const app = e();
const port = process.env.PORT || 3000

app.use(e.json());

app.get('/api/health', (req, res) => {
	res.json({ status: 200, message: 'API is healthy' })
});

app.use('/api/users', userRouter);

app.listen(port, () => {
	console.log(`API running on port ${port}`)
});
