import { Post, User } from "./models";
import { connectToDb } from "./utils";
export async function getPosts() {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log("error", error);
  }
}

export async function getUser(id) {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log("error", error);
  }
}
