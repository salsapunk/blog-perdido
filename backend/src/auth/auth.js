import jsonwebtoken from "jsonwebtoken";
import bcrypt from 'bcrypt';
import userRepository from '../user/user.repository.js';

const jwt = jsonwebtoken;

export async function authUser(req, res, next) {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new Error('Credenciais inválidas');
	}

	const user = await userRepository.findByEmail(email, 2);
	if (!user) {
		throw new Error('Credenciais inválidas');
	}

	const match = await bcrypt.compare(password, user.password)

	if (!match) {
		throw new Error('Credenciais inválidas');
	}

	const accessToken = jwt.sign({ id: user.id_user },
		process.env.ACCESS_TOKEN_SECRET,
		{ expiresIn: '72h' });
	res.send(accessToken);
	next();
}
