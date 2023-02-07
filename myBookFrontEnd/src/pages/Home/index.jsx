import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);/**serve per memorizzare lo stato dell'applicazione */
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
      ); /*i dati che stiamo andando a prendere saranno tipo json */
  }

  useEffect(() => {
    getData();
  }, []); /*fai partire questa funzione in determinati effetti */
  useEffect(() => {
    console.log(data);
  }, [data]); /*venga eseguito solo quando data viene modificato */
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
