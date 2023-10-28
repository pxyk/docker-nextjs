import React, { useEffect, useState } from "react";
import { fetchPersonData } from "./api/hello";

function PersonName() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetchPersonData()
      .then((personData) => {
        const personName = personData.name;
        setName(personName);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>Name: {name}</h1>
    </div>
  );
}

export default PersonName;
