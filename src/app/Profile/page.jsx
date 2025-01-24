import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {

  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const user = await getUser();

  return (
    <div className="container mx-auto mt-10 p-6 ">
      <h1 className="text-3xl font-bold text-blue-600 mb-4"> Welcome to your Profile, {user?.family_name || "User"}! </h1>
      <div className="text-lg">
        <p> <span className="font-bold">Full Name:</span> {user?.given_name} {user?.family_name} </p>
        <p> <span className="font-bold">Email:</span> {user?.email} </p>
      </div>
    </div>
  );
}
