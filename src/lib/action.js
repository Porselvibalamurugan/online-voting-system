"use server";
import bcrypt from "bcryptjs";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { ObjectId } from "mongodb";

export const login = async (prevState, formdata) => {
  const { username, password } = Object.fromEntries(formdata);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
export const handleLogout = async () => {
  await signOut();
};
export const register = async (prevState, formdata) => {
  const { username, email, password, passwordRepeat } =
    Object.fromEntries(formdata);
  if (password != passwordRepeat) {
    return { error: "passwords do not match" };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newuser = new User({
      username,
      email,
      password: hashpassword,

      count: 0,
    });
    console.log(newuser);
    await newuser.save();
    console.log("saved to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const addCount = async (prevState, formdata) => {
  const { name } = Object.fromEntries(formdata);
  const candidate = await Post.findOne({ name });
  console.log(candidate);
  try {
    await Post.deleteOne({ name });
    const newCandidate = new Post({
      name: candidate.name,
      party: candidate.party,
      symbol: candidate.symbol,
      description: candidate.description,
      img: candidate.img,
      count: candidate.count + 1,
    });
    await newCandidate.save();
    const session = await auth();
    const userid = new ObjectId("" + session.id);
    await User.findByIdAndUpdate(userid, { count: 1 }, { new: true });
    revalidatePath("/admin");
    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
export const addCandidate = async (prevState, formdata) => {
  const { name, party, description, img } = Object.fromEntries(formdata);

  try {
    connectToDb();
    const newCandidate = new Post({
      name,
      party,
      description,
      img,
      count: 0,
    });
    await newCandidate.save();
    revalidatePath("/admin");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePath("/admin");
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};
