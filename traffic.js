// FORK THIS PEN

// 1. Wire up the buttons to the lights
const stopButton = document.getElementById("stop");
const stopLight = document.querySelector(".light.stop");
const cautionButton = document.getElementById("caution");
const cautionLight = document.querySelector(".light.caution");
const goButton = document.getElementById("go");
const goLight = document.querySelector(".light.go");
const allLights = document.getElementsByClassName('light')
const goTimer = document.getElementById('goTimer');
const stopTimer = document.getElementById('stopTimer');


//hover
const hoverToggleIn = (lightRefOn, lightRefOff1, lightRefOff2) => {
    if (lightRefOff1.classList.contains('on') || lightRefOff2.classList.contains('on')) {
        lightRefOn.classList.remove('on')
    } else {lightRefOn.classList.add('on') }
}
const hoverToggleOut = (lightRef) => {
    lightRef.classList.remove('on');
}

stopLight.addEventListener('mouseenter', () => hoverToggleIn(stopLight, goLight, cautionLight));
stopLight.addEventListener('mouseleave', () => hoverToggleOut(stopLight));
cautionLight.addEventListener('mouseenter', () => hoverToggleIn(cautionLight, goLight, stopLight));
cautionLight.addEventListener('mouseleave', () => hoverToggleOut(cautionLight));
goLight.addEventListener('mouseenter', () => hoverToggleIn(goLight, cautionLight, stopLight));
goLight.addEventListener('mouseleave', () => hoverToggleOut(goLight));





//ref all 1
// for (let i=0; i < allLights.length; i++) {
//     allLights[i].addEventListener('mouseover', () => {

//         allLights[i].classList.add('on');
//     })
//     allLights[i].addEventListener('mouseleave', () => {
//         allLights[i].classList.remove('on');
//     })

// }
//ref all 2
// Array.prototype.forEach.call(allLights, light => {
//     light.addEventListener('mouseenter', () => {
//         light.classList.add("on");
//     })
//     light.addEventListener('mouseleave', () => {
//         light.classList.remove("on");
//     })
// });


//click 

const toggleClass = (lightRefOn, lightRefOff1, lightRefOff2 ) => {
   
    if(lightRefOn.classList.contains('on')) {
        lightRefOn.classList.remove('on');
    }
    else {
        lightRefOn.classList.add("on");
        lightRefOff1.classList.remove('on');
        lightRefOff2.classList.remove('on');

    }
}

goButton.addEventListener("click",  () =>  toggleClass(goLight, stopLight, cautionLight));
cautionButton.addEventListener("click", () => toggleClass(cautionLight, stopLight, goLight));
stopButton.addEventListener("click", () => toggleClass(stopLight, cautionLight, goLight));



//Timer 



let colorHistory;
const handleActiveColor = () => {
    
    if (stopLight.classList.contains('on')) {
        colorHistory = "red";
        stopLight.classList.remove('on');
        cautionLight.classList.add('on');
        return;
    }
    if (cautionLight.classList.contains('on')) {
        if(colorHistory === 'red') {
            goLight.classList.add('on'); 
        }
        if(colorHistory === 'green') {
            stopLight.classList.add('on');
        }
        cautionLight.classList.remove('on');
        
        return;
    }
    if (goLight.classList.contains('on')) {
        colorHistory = "green";
        goLight.classList.remove('on');
        cautionLight.classList.add('on');
        return;
    }
    stopLight.classList.add('on');
}

let handleIntervalTimer;

goTimer.addEventListener("click", () => {
    handleActiveColor();
    handleIntervalTimer = setInterval(handleActiveColor, 2000);
});

stopTimer.addEventListener("click", () => clearInterval(handleIntervalTimer));