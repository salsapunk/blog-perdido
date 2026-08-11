import bcrypt from 'bcrypt';
import userRepository from "./user.repository.js";

export async function createUser(payload) {
	const { name, email, password } = payload;
	if (!name || !email || !password) {
		throw new Error('Dados inválidos');
	}

	const normalizedEmail = email.trim().toLowerCase();
	const existingUser = await userRepository.findByEmail(normalizedEmail, 1);

	if (existingUser) {
		throw new Error('Email já cadastrado');
	}

	const hashedPswd = await bcrypt.hash(password, 10);

	const user = await userRepository.create({
		name,
		email: normalizedEmail,
		password: hashedPswd
	});
	return user;
}

export async function readUsers() {
	const user = await userRepository.read();
	return user;
}

export default { createUser, readUsers };
