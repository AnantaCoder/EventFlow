import { auth } from "@/auth";
import { redirect } from "next/navigation";
import JudgeDashboardClient from "./JudgeDashboardClient";

export const dynamic = 'force-dynamic';

export default async function JudgePage() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  return <JudgeDashboardClient user={session.user} />;
}
