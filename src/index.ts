import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UpdateParams {
	firstName: string;
	lastName: string;
}

async function insertUser(
	userName: string,
	firstName: string,
	password: string,
	lastName?: string
) {
	try {
		const response = await prisma.user.create({
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

async function updateUser(
	userName: string,
	{ firstName, lastName }: UpdateParams
) {
	try {
		const updatedUser = await prisma.user.update({
			where: {
				email: userName,
			},
			data: {
				firstName,
				lastName,
			},
		});

		console.log('user updated ', { updatedUser });
	} catch (error) {
		console.log('error ,', error);
	}
}

async function deleteUser(userName: string) {
	try {
		const res = await prisma.user.delete({
			where: {
				email: userName,
			},
		});

		console.log('user deleted, ', res);
	} catch (error) {
		console.log({ error });
	}
}
// insertUser('saad2@test.com', 'saad', 'djfkajds');

// updateUser('saad1@test.com', {
// 	firstName: 'saad update',
// 	lastName: 'ahmad update',
// });

deleteUser('saad1@test.com');
