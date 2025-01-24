import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
            <Link href="/">BlogHaven</Link>
          </div>


          <div className="space-x-6 flex items-center">
            <Link href="/" className="hover:text-blue-300 transition duration-300"> Home</Link>
          {user && (
              <Link  href="/dashboard/profile" className="hover:text-blue-300 transition duration-300"> profile</Link>
            )}

            {user ? (
              <Link href="/api/auth/logout" className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-300" >Logout </Link>
            ) : (
              <Link
                href="/api/auth/login"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
