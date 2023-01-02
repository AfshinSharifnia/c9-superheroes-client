import { useState } from "react";

const Content = () => {

//React hook
const [name, setName] = useState("");

  const handleNameChange = () => {

    const names = ["Bob", "Kevin", "Dave"];

    const int = Math.floor(Math.random() * 3);

    setName(names[int])

    // return names[int];
  };

  return (
    <main>
      <p >Hello {name}</p>

<button onClick={handleNameChange}>Change Name </button>

    </main>
  );
};
export default Content;
