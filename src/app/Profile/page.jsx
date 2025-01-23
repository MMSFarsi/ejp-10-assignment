
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="container mx-auto mt-10 p-6   ">
    
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome, {user.family_name || 'User'}!</h1>
          <div className="text-lg">
            <p>
              <h2>Full Name:</h2> {user.given_name} {user.family_name}
            </p>
            <p>
              <h2>Email:</h2> {user.email}
            </p>
          </div>
    </div>
  );
};

export default Profile;
