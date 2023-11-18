window.addEventListener("DOMContentLoaded", () => {

    const reservaBtn = document.getElementById("reserva_btn");
    const desactivaBtn = document.getElementById("cancelar_reserva");

    function handleclick() {
        window.alert("reserva ahora y gracias");
    }

    reservaBtn.addEventListener("click", handleclick);

    desactivaBtn.addEventListener("click", () => {
        reservaBtn.removeEventListener("click", handleclick)
    
     })
});

