import React from "react";
const UserStatus = ({ isLoggedIn, IsAdmin }) => {
  if (isLoggedIn && IsAdmin) return <h1>Welcome Admin</h1>;
  else return <h1>welcome user</h1>;
};

export default UserStatus;
