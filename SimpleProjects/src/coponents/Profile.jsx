import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfile({ ...Profile, name: value });
  };
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your name"
            onChange={handleChange}
            value={profile.name}
          />
        </label>
        <button onClick={handleChange}>Add Name</button>
      </form>
      <ul></ul>
    </div>
  );
};

export default Profile;
