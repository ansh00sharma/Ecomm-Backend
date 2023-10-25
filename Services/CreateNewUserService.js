import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const newUser =  async(email, password, token) => {

  await prisma.users.create({
    data: {
      email: email,
      password: password,
      token : token
    },
  })

}

export {newUser};