import bcrypt from 'bcrypt';
import userRepository from "./user.repository.js";

export async function createUser(payload) {
	const {
		name,
		email,
		password
	} = payload;

	const existingUser = await userRepository.findByEmail(email);

	if (existingUser) {
		throw new Error('Email já cadastrado');
	}

	const hashedPswd = await bcrypt.hash(password, 10);

	const user = await userRepository.create({ name, email, password: hashedPswd });
	return user;
}

export default { createUser };
