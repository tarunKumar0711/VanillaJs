const secHand = document.querySelector('.sec');
function setDate()
{
    const date = new Date();
    const seconds = date.getSeconds();
    const secondRotate = ((seconds/60)*360);

    secHand.style.transform =`rotate(${secondRotate}deg)`;
}
setInterval(setDate,1000);