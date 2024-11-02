import React from "react";

const SetNameToLocal = () => {
  const [name, setName] = React.useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  const changeName = (event) => {
    setName(event.target.value);
  };
  React.useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  const handleClear = () => {
    setName("");
  };
  return (
    <div>
      <h1>your name:{name}</h1>
      <input
        type="text"
        value={name}
        onChange={changeName}
        placeholder="enter your name"
      />
      <button onClick={handleClear}>ClearName</button>
    </div>
  );
};

export default SetNameToLocal;
