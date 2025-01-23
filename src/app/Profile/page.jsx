import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Profile = async () => {
  // Fetch user information on the server
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="container mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      {user ? (
        <>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome, {user.family_name || 'User'}!</h1>
          <div className="text-lg">
            <p>
              <strong>Full Name:</strong> {user.given_name} {user.family_name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </>
      ) : (
        <p className="text-xl text-gray-700">Loading your profile...</p>
      )}
    </div>
  );
};

export default Profile;
