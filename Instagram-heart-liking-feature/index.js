var container=document.querySelector(".container");

var heart=document.querySelector("i");

container.addEventListener("click", function(){
    heart.style.transform="translate(-50%, -50%) scale(3)";
    heart.style.opacity="0.8"
    setTimeout(() => {
        heart.style.opacity=0;
    },1000);
    setTimeout(() => {
        heart.style.transform="translate(-50%, -50%) scale(3)";
    },2000);
})