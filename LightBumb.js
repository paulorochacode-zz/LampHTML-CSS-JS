const turnOnButton = document.getElementById ('turnOn');
const turnOffButton = document.getElementById ('turnOff');
const lightBumb = document.getElementById ('light');

function isLightBumbBroken(){
      return lightBumb.src.indexOf ( 'quebrada' ) > -1
}

function lightOn () {
      if ( !isLightBumbBroken () ){
            lightBumb.src= './img/ligada.jpg';
}}

function lightOff () {
      if ( !isLightBumbBroken () ){
            lightBumb.src= './img/desligada.jpg';
}}

function brokeLight () {
      lightBumb.src = './img/quebrada.jpg';
}


turnOnButton.addEventListener ('click', lightOn);
turnOffButton.addEventListener ('click', lightOff);
lightBumb.addEventListener('mousemove', lightOn);
lightBumb.addEventListener('dblclick', brokeLight);
lightBumb.addEventListener('mouseout', lightOff);


