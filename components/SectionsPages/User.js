import React from "react";

export default function User() {
  const [profile, setProfile] = React.useState(null);
  React.useEffect(() => {
    setTimeout(async () => {
      const rse = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await rse.json();
      setProfile(data);
    }, 5000);
  }, []);
  return (
    <div className="user">
      <h1 className=" text-5xl font-bold mb-5">User Data</h1>
      {profile && (
        <>
          <h2 className=" text-2xl font-bold">{profile.username}</h2>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </>
      )}
      {!profile && (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
}
