import userService from "./user.service.js";

export async function createUser(req, res, next) {
	try {
		const { name, email, password } = req.body;
		const user = await userService.createUser({ name, email, password });
		return res.status(201).json(user);
	} catch (error) {
		next(error);
	}
}

export default { createUser };
