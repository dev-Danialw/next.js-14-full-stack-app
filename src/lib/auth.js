import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectTODataBase } from "./utils";
import { User } from "./models";
import { getUserByEmail } from "./data";

import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        connectTODataBase();

        try {
          let existingUser = await getUserByEmail(profile.email);

          if (!existingUser) {
            const newUser = new User({
              username: profile.name,
              email: profile.email,
              image: profile.picture,
            });

            existingUser = await newUser.save();
            console.log("User created successfully");
          } else {
            console.log("User already exists");
          }

          user.id = existingUser?._id.toString();
          user.isAdmin = existingUser?.isAdmin;

          return user;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    session: { strategy: "jwt" },
    ...authConfig.callbacks,
  },
});
