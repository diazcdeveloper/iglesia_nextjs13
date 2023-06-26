"use client";
import { useEffect, useState } from "react";
import supabase from "../../../supabase";
import "./beneficiarios.css"

//función asíncrona para obtener los datos de la tabla "beneficiarios" desde Supabase.

async function fetchBeneficiarios() {
  const { data, error } = await supabase.from("beneficiarios").select("*");
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

function Beneficiarios() {
  const [beneficiarios, setBeneficiarios] = useState([]);

  useEffect(() => {
    async function fetchAndSetBeneficiarios() {
      const data = await fetchBeneficiarios();
      setBeneficiarios(data);
    }

    fetchAndSetBeneficiarios();
  }, []);

  return (
    <>
      <h1>Lista de Beneficiarios</h1>
      <ul className="list">
        {beneficiarios.map((beneficiario) => (
          <li className="card" key={beneficiario.id}>
                <h4>{beneficiario.nombre}</h4>
                <h4>{beneficiario.apellidos}</h4>
                <img src={beneficiario.foto} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Beneficiarios;
