import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ParticipantDashboardClient from "./ParticipantDashboardClient";

export const dynamic = 'force-dynamic';

export default async function ParticipantPage() {
  const session = await auth();
  
  if (!session) {
    redirect("/login");
  }

  return <ParticipantDashboardClient user={session.user} />;
}
