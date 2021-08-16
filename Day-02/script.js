const secHand = document.querySelector('.sec');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');
function setDate()
{
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();


    const secondRotate = ((seconds/60)*360);
    const minuteDegree = ((minutes/60)*360);
    const hourDegree = ((hours/12)*360);

    secHand.style.transform =`rotate(${secondRotate}deg)`;
    minHand.style.transform =`rotate(${minuteDegree}deg)`;
    hourHand.style.transform =`rotate(${hourDegree}deg)`;

    
}
setInterval(setDate,1000);