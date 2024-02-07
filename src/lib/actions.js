"use server";

import { revalidatePath } from "next/cache";
import { connectTODataBase } from "./utils";
import { Blog } from "./models";
import { signIn, signOut } from "./auth";

export const addBlog = async (prevState, formData) => {
  const { title, slug, img, desc, userId } = Object.fromEntries(formData);

  try {
    connectTODataBase();
    const newBlog = new Blog({
      title,
      slug,
      img,
      desc,
      userId,
    });

    await newBlog.save();
    console.log("blog post saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteBlog = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectTODataBase();

    await Blog.findByIdAndDelete(id);
    console.log("blog post deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const handleGoogleLogin = async () => {
  await signIn("google");
};

export const handleGoogleLogout = async () => {
  await signOut("google");
};
