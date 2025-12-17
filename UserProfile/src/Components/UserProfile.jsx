import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Bhavani";
  const age = 25;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
