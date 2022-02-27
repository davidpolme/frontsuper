import React, { useState, useEffect } from "react";
import "./Home.scss";
import Cards from "../../components/Cards";
import Pagination from "../../components/Pagination";

import { getConcursosApi } from "../../api/concursos";
import { toast } from "react-toastify";

export default function Home() {
  const [newCard, setNewCard] = useState(null);
  const [existData, setExistData] = useState(false);

  useEffect(() => {
    getConcursosApi()
      .then((response) => {
        // setNewCard(response)
        setNewCard(response.concursos);
        setExistData(true);
        if (response.concursos.length <= 0) {
          toast.info("Aun no hay ningun Concurso");
          setExistData(false);
        }
      })
      .catch((err) => {
        toast.error("Error al cargar los datos: ");
        setExistData(false);
        console.log(err);
      });
  }, []);

  /* const cards = [
   {
     id: "1",
     imgSrc:
       "https://images.unsplash.com/photo-1578070181910-f1e514afdd08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1833&q=80",
     Title: "El Titulin",
     Text: "El Textin, bien perrin",
   },
 ]; */

  return (
    <div className="home">
      <h1>Concursos</h1>
      {existData ? (
        <Pagination items={newCard} />
      ) : (
        <h2>Aún no hay concursos</h2>
      )}
    </div>
  );
}
/* imgSrc, Title, Text */
