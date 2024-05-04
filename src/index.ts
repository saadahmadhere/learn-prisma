import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function insertUser(
	userName: string,
	firstName: string,
	password: string,
	lastName: string
) {
	const response = await prima.user.create({
		data: {
			email: userName,
			firstName,
			lastName,
			password,
		},
	});

	console.log(response);
}
