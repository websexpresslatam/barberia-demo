// 🔥 CAMBIÁ SOLO ESTE NÚMERO
const numero = "598000000000"; // sin + ni espacios

function enviarWhatsApp(texto){
  const mensaje = encodeURIComponent(texto);
  window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");
}

// Botón principal hero
function contactar(){
  enviarWhatsApp(
    "Hola! Quiero reservar un turno en Barbería Premium 💈 ¿Qué horarios tienen disponibles?"
  );
}

// Botones de precios
function reservarCorte(){
  enviarWhatsApp(
    "Hola! Quiero reservar un turno para CORTE de pelo 💇‍♂️"
  );
}

function reservarBarba(){
  enviarWhatsApp(
    "Hola! Quiero reservar un turno para BARBA 🧔"
  );
}

function reservarCombo(){
  enviarWhatsApp(
    "Hola! Quiero reservar el COMBO Corte + Barba 🔥"
  );
}

