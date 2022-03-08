import React, { useState, useEffect } from "react";
import Pagination from "../../../components/Pagination";


import { getPublicConcursosApi } from "../../../api/concursos";
import { toast } from "react-toastify";



import "./Landpage.scss";

export default function Landpage() {
  const [newCard, setNewCard] = useState(null);
  const [existData, setExistData] = useState(false);
    useEffect(() => {
      getPublicConcursosApi()
        .then((response) => {
          console.log({ "Response Concursos": response.concursos });
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


  return (
    <>
      <section className="landpage">
        <h1>Concursos públicos</h1>
        {existData ? (
          <Pagination items={newCard} />
        ) : (
          <h2>Aún no hay concursos</h2>
        )}
      </section>
    </>
  );
}
