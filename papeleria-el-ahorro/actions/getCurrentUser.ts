import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb"; 
export async function getSession() {
  return await getServerSession(authOptions);
}

export async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where:{
        email:session?.user?.email,
      },
    })
    if(!currentUser){
      return null
    }
    return {
      ...currentUser,
      firstname:currentUser.firstname,
      lastname:currentUser.lastname,
      createdAt: currentUser.createdAt.toISOString(),
      updateAt: currentUser.updateAT.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString()|| null, 
    }

  } catch (error: any) {
    return null;
  }
}


