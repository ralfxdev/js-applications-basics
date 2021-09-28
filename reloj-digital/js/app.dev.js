const reloj = document.querySelector(".reloj");

const gethora = () => {

    const fecha = new Date();

    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundos: fecha.getSeconds(),
    };

    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundos}`;
};

setInterval(gethora, 1000);