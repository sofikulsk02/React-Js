import React from "react";
import { useState } from "react";
const StateArr = () => {
  const [friends, setFriends] = useState([
    "Rajib sk",
    "Ajim sk",
    "Jony sk",
    "Rajen",
  ]);
  const [movie, setMovie] = useState({
    title: "Thor the endGame",
    ratings: 4.5,
  });
  const addFriend = () => {
    setFriends([...friends, "Alamgir"]);
  };
  const changeRating = () => {
    setMovie({ ...movie, ratings: 5 });
  };
  return (
    <div>
      {friends.map((f) => (
        <li>{f}</li>
      ))}
      <button
        style={{
          backgroundColor: "yellow",
          width: "100px",
          borderRadius: "5px",
        }}
        onClick={addFriend}
      >
        Add friend
      </button>

      {<h1>{movie.title}</h1>}
      {<h1>{movie.ratings}</h1>}
      <button onClick={changeRating} style={{ backgroundColor: "greenyellow" }}>
        ChangeRating
      </button>
    </div>
  );
};

export default StateArr;
