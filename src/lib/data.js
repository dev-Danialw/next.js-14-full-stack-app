import { Blog, User } from "./models";
import { connectTODataBase } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getBlogs = async () => {
  try {
    await connectTODataBase();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    console.log(error);
    throw new Error("Error while getting blogs: ", error);
  }
};

export const getBlog = async (slug) => {
  try {
    await connectTODataBase();
    const blog = await Blog.findOne({ slug });
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("Error while getting blog: ", error);
  }
};

export const getUserById = async (id) => {
  noStore();
  try {
    await connectTODataBase();
    const user = await User.findOne({ id });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error while getting user: ", error);
  }
};

export const getUserByEmail = async (email) => {
  try {
    await connectTODataBase();
    const user = await User.findOne({ email: email });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error while getting user: ", error);
  }
};

export const getUsers = async () => {
  try {
    await connectTODataBase();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Error while getting users: ", error);
  }
};
