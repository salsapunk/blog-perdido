import pool from '../config/db.js';

export async function findByEmail(email) {
	const result = await pool.query(
		`SELECT id_user FROM users WHERE email = $1;`, [email]
	);

	return result.rows[0] || null
}

export async function create(payload) {
	const result = await pool.query(
		`INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING id_user;`,
		[payload.name, payload.email, payload.password]
	);

	return result.rows[0] || null
}

export default { findByEmail, create };
