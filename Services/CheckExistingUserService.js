import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const CheckUser = async(email)=> {

    const user_status = await prisma.users.findUnique({
        where: {
          email: email
        },
      })

    return !!user_status ;
};

export {CheckUser};