"use client";

import { createEvent, getEventTypes } from "@/redux/actions";
import validateForm from "@/utils/validateForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const EventPage = () => {
  const allEventTypes = useSelector((state) => state.eventTypes);
  const dispatch = useDispatch();
  const [event, setEvent] = useState({
    title: "",
    location: "",
    date: "",
    description: "",
    image: "",
    status: "active",
    eventType: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getEventTypes());
    //    console.log("USE EFFECT EVENT TYPES:", allEventTypes);
  }, []);

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...event, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ESTADO LOCAL EVENTO:", event);
    // console.log("TIPOS DE EVENTOS:", allEventTypes);
    dispatch(createEvent(event));
  };

  const handleDisabled = () => {
    if (errors != {}) {
      for (let error in errors) {
        if (errors[error] !== "") return true;
      }
    }
    return false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>INGRESE DATOS DEL EVENTO:</h2>
      <label>Titulo:</label>
      <input
        name="title"
        placeholder="Ingrese un titulo..."
        type="text"
        onChange={handleChange}
      />
      <span>{errors.title}</span>
      <br />
      <label>Ubicacion:</label>
      <input
        name="location"
        placeholder="Ingrese la ubicacion..."
        type="text"
        onChange={handleChange}
      />
      <span>{errors.location}</span>
      <br />
      <label>Fecha:</label>
      <input name="date" type="date" onChange={handleChange} />
      <span>{errors.date}</span>
      <br />
      <label>Descripcion:</label>
      <input
        name="description"
        placeholder="Ingrese una breve descripcion..."
        type="text"
        onChange={handleChange}
      />
      <span>{errors.description}</span>
      <br />
      <label>Imagen:</label>
      <input
        name="image"
        placeholder="Ingrese una URL..."
        type="url"
        onChange={handleChange}
      />
      <span>{errors.image}</span>
      <br />
      <label>Tipo de Evento:</label>
      <select name="eventType" onChange={handleChange}>
        <option selected disabled>
          Tipo de Evento
        </option>
        {allEventTypes?.map((elem) => (
          <option key={elem.id}>{elem.name}</option>
        ))}
      </select>
      <br />
      <span>{errors.eventType}</span>
      <button>SUBIR</button>
    </form>
  );
};

export default EventPage;
