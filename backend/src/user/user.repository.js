import pool from '../config/db.js';

export async function findByEmail(email, option) {
	if (option == 1) {
		const result = await pool.query(
			`SELECT id_user FROM users WHERE email = $1;`, [email]
		);
		return result.rows[0] || null;
	} else {
		const result = await pool.query(
			`SELECT * FROM users WHERE email = $1;`, [email]
		);
		return result.rows[0] || null;
	}
}

export async function create(payload) {
	const result = await pool.query(
		`INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id_user;`,
		[payload.name, payload.email, payload.password]
	);

	return result.rows[0] || null;
}

export async function read() {
	const result = await pool.query(
		`SELECT id_user, name, email, password FROM users;`,
	);

	return result.rows || null;
}

export default { findByEmail, create, read };
