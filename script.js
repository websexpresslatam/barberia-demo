<<<<<<< HEAD
function contactar(){
  // Cambiá este número por el del negocio (con prefijo, sin +, sin espacios)
  // Ejemplo Uruguay: 5989XXXXXXX | Argentina: 54911XXXXXXX
  const numero = "598000000000";

  const mensaje = encodeURIComponent(
    "Hola! Quiero reservar un turno en Barbería Premium. ¿Qué horarios tienen disponibles?"
  );

  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}

=======
function contactar(){
  // Cambiá este número por el del negocio (con prefijo, sin +, sin espacios)
  // Ejemplo Uruguay: 5989XXXXXXX | Argentina: 54911XXXXXXX
  const numero = "598000000000";

  const mensaje = encodeURIComponent(
    "Hola! Quiero reservar un turno en Barbería Premium. ¿Qué horarios tienen disponibles?"
  );

  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}
>>>>>>> ed5e8b6e381b7a8968042d7d1561902b086444a3
