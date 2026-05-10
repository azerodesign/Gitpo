"use server";

import { signIn, signOut } from "@/lib/auth";

export async function loginWithGithub() {
  await signIn("github", { redirectTo: "/dashboard" });
}

export async function loginWithPat(token: string) {
  await signIn("pat", { token, redirectTo: "/dashboard" });
}

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}
