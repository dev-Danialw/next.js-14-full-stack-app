"use server";

import { revalidatePath } from "next/cache";
import { connectTODataBase } from "./utils";
import { Blog, User } from "./models";
import { signIn, signOut } from "./auth";

export const addBlog = async (prevState, formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectTODataBase();
    const newBlog = new Blog({
      title,
      desc,
      slug,
      userId,
    });

    await newBlog.save();
    console.log("blog post saved to db");
    revalidatePath("/blog");
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
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectTODataBase();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("user saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectTODataBase();

    await Blog.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("user deleted from db");
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
