import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  const user = session?.user;
  console.log(user);
  return (
    <div>
      <h1>Login con Github</h1>
    </div>
  );
}
