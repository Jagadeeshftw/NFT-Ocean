"use server";
import prisma from "./db";

interface CreateUserProps {
  formData: FormData;
  address: string;
}

const createUser = async ({ formData, address}: CreateUserProps) => {
  const name = `${formData.get("firstname")} ${formData.get("lastname")}`;
  const email = formData.get("email") as string;

  await prisma.user.create({
    data: {
      address,
      email,
      name,
    },
  });
};

const isUser = async (address:string) => {

    const user = await prisma.user.findUnique({
        where: {
          address: address,
        },
      })
    return user;
}

const allUsers = async () => {

    const users = await prisma.user.findMany()
    return users;
}


export {createUser, isUser, allUsers};



