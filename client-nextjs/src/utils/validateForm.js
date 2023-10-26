const regexLetters = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

export default function validateForm(inputs) {
  let errors = {};
  if (!inputs.title) errors.title = "Se debe ingresar un titulo";
  //CONSULTAR SI EL TITULO PUEDE CONTENER CARACTERES QUE NO SEAN LETRAS
  // else if(!regexLetters.test(inputs.title)) errors.title = "El titulo solo puede contener letras"
  if (!inputs.location) errors.location = "Se debe ingresar una ubicacion";
  if (!inputs.date) errors.date = "Se debe ingresar una fecha";
  if (!inputs.description)
    errors.description = "Se debe ingresar una descripcion";
  if (!inputs.image) errors.image = "Se debe una imagen";
  else if (!regexURL.test(inputs.image)) errors.image = "Debe ser una URL";
  if (!inputs.eventType)
    errors.eventType = "Se debe seleccionar un tipo de evento";
  return errors;
}
