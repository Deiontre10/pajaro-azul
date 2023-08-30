import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthBtnClient from "../auth-btn-client";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: session } = await supabase.auth.getSession();

  if (session) {
    redirect("/");
  }

  return <AuthBtnClient session={session} />;
}
