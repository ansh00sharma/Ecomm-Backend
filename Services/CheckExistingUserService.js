import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const checkuser = async(email)=> {

    const user_status = await prisma.users.findUnique({
        where: {
          email: email
        },
      })

    return !!user_status ;
};

export {checkuser};