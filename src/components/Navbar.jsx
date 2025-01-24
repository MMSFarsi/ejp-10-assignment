import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="text-xl lg:text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300">
            <Link href="/">BlogHaven</Link>
          </div>


          <div className="space-x-6 flex items-center">
            <Link href="/" className="hover:text-blue-300 transition duration-300"> Home</Link>
            <Link  href="/dashboard/profile" className="hover:text-blue-300 transition duration-300"> Profile</Link>

            {user ? (
             <LogoutLink className="px-1 lg:px-4 py-1 lg:py-2 bg-red-500 hover:bg-red-600 text-white rounded transition duration-300">Logout</LogoutLink>
            ) : (
              <Link
                href="/api/auth/login"
                className="px-1 lg:px-4 py-1 lg:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300"
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
