let msjFinal = document.getElementById('mensajeFinal')
mensajeFinal.style.display= 'none';
const getRemainTime = deadline => {
    let now = new Date();
    remainTime = (new Date(deadline) - now + 1000)/1000;
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2);
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2); 
    remainDays = Math.floor(remainTime / (3600 * 24));

return{
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
}

};

const countdown = (deadline, elemento, mensajeFinal)=>{
    const elm = document.getElementById('elemento');
    const updateTimer = setInterval ( () =>{
        let tiempo = getRemainTime(deadline);
        elm.innerHTML = `${tiempo.remainDays} días:${tiempo.remainHours} hs:${tiempo.remainMinutes} min:${tiempo.remainSeconds}s`;
    
    if(tiempo.remainTime <=1){
    clearInterval(updateTimer);
    elm.innerHTML=mensajeFinal;
    mensajeFinal.style.display= 'none';
    }

    },1000)


};

countdown('Dec 10 2023 00:00:01 GMT-0300', 'elemento', 'mensaje final');

