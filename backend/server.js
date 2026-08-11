import e from "express";
import 'dotenv/config';
import userRouter from "./src/user/user.routes.js";
import { authUser } from "./src/auth/auth.js";

const app = e();
const port = process.env.PORT || null

app.use(e.json());

app.get('/api/health', (req, res) => {
	res.json({ status: 200, message: 'API is healthy' })
});
app.post('/api/login', authUser);

app.use('/api/users', userRouter);

app.listen(port, () => {
	console.log(`API running on port ${port}`)
});
