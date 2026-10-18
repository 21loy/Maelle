"use server";
import {redirect} from "next/navigation";
import {createClient} from "@/lib/supabase/server";
export async function signIn(formData:FormData){const email=String(formData.get("email")??"").trim();const password=String(formData.get("password")??"");const next=String(formData.get("next")??"/private");if(!email||!password)redirect("/login?error=missing");const supabase=await createClient();const {error}=await supabase.auth.signInWithPassword({email,password});if(error)redirect("/login?error=invalid");redirect(next.startsWith("/private")?next:"/private")}
