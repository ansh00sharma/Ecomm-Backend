import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CreatingNewUser =  async(email, password) => {

  await prisma.users.create({
    data: {
      email: email,
      password: password
    }
  })

}

export {CreatingNewUser};