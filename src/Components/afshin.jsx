import React from "react";

const Afshin = () => {
  const handleEmployeeNameChange = () => {
    const sunlifeEmployeesNames = ["Afi", "Azi", "Aria", "Arash"];
    const int = Math.floor(Math.random() * 4);
    return sunlifeEmployeesNames[int];
  };

  return (
    <main>
      <p>Hello {handleEmployeeNameChange()}</p>
    </main>
  );
};

export default Afshin;
