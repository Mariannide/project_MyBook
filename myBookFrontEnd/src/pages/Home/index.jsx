import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  function getData() {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) =>
        setData(json)
      ); 
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(()=> {
    alert("Hola Mundo!")
  }, []);

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
