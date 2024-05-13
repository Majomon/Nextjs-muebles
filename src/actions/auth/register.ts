"use server";

import { prisma } from "@/lib/prisma";

export const registerUser = async (
  name: string,
  email: string,
  image: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return {
      ok: true,
      user: user,
      message: "Usuario creado",
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "No se pudo crear el usuario",
    };
  }
};
