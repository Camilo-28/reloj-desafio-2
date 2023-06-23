console.log('conectado')
const segundero=document.querySelector('.segundo')
const minutero=document.querySelector('.minuto')
const hora=document.querySelector('.hora')
function tiempoReloj(){
    const ahora=new Date();
    const segundos=ahora.getSeconds();
    const minutos=ahora.getMinutes();
    const horas=ahora.getHours();

    const minutoDeg=((minutos/60)*360)+90;
    minutero.style.transform=`rotate(${minutoDeg}deg)`

    const horaSeg=((horas/12)*360)+90;
    hora.style.transform=`rotate(${horaSeg}deg)`

    const segDeg=((segundos/60)*360)+90;
    segundero.style.transform=`rotate(${segDeg}deg)`
    

    
}

setInterval(tiempoReloj,1000);