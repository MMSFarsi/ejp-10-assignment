import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {

  const { isAuthenticated, getUser } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  const user = await getUser();

  return (
    <div className="container min-h-screen mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
 
    <h1 className="text-3xl font-bold text-blue-600 mb-6">
      Welcome to your Profile, {user?.family_name || "User"}!
    </h1>


    <div className="flex flex-col md:flex-row items-center gap-6">
 
      <div className="flex-shrink-0">
        <img
          src={user?.picture || ""}
          alt="Profile"
          referrerPolicy="no-referer"
          className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-md"
        />
      </div>


      <div className="text-lg">
        <p>
          <span className="font-bold">Full Name:</span>{" "}
          {user?.given_name} {user?.family_name || "N/A"}
        </p>
        <p>
          <span className="font-bold">Email:</span>{" "}
          {user?.email || "N/A"}
        </p>
      </div>
    </div>
  </div>
  );
}
