export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

function User({id, name, username, email, website}: UserType) {
  return (
    <div
      className={
        "bg-gray-900 p-2 w-fit rounded-md outline-1 solid outline-pink-200 text-white m-5"
      }
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}

export default User;
