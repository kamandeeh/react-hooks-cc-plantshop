import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArr, setPlantArr] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-9oc7.onrender.com/plants")
      .then((res) => res.json())
      .then((data) => setPlantArr(data));
  }, []);

  let filtered = plantArr.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm plantArr={plantArr} setPlantArr={setPlantArr} />
      <Search setSearch={setSearch} />
      <PlantList plantArr={filtered} />
    </main>
  );
}

export default PlantPage;