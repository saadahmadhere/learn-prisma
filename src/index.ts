import { PrismaClient } from '@prisma/client';

const prima = new PrismaClient();

async function insertUser(
	userName: string,
	firstName: string,
	password: string,
	lastName?: string
) {
	try {
		const response = await prima.user.create({
			data: {
				email: userName,
				firstName,
				lastName,
				password,
			},
			select: {
				id: true,
				email: true,
				firstName: true,
			},
		});
		console.log(response);
	} catch (error) {
		console.log('error: ', error);
	}
}

insertUser('saad2@test.com', 'saad', 'djfkajds');
