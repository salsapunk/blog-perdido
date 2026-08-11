import userService from "./user.service.js";

export async function createUser(req, res, next) {
	const {
		name,
		email,
		password
	} = req.body;
	const user = await userService.createUser({ name, email, password });

	if (!user) {
		const err = new Error('Erro ao criar usuário');
		err.status = 401;
		next(err);
	}

	return res.status(201).json(user);
}

export async function readUsers(req, res, next) {
	const user = await userService.readUsers();

	if (!user) {
		const err = new Error('Erro ao ler usuários');
		err.status = 404;
		next(err);
	}

	return res.status(200).json(user);
}

export default { createUser, readUsers };
