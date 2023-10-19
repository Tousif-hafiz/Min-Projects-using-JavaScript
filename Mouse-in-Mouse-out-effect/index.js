let block=document.querySelectorAll(".block");

block.forEach((val)=>{
    val.addEventListener("mouseenter",()=>{
        val.childNodes[3].style.opacity=1;
    })
    val.addEventListener("mouseleave",()=>{
        val.childNodes[3].style.opacity=0;
    })
    val.addEventListener("mousemove",(point)=>{
        val.childNodes[3].style.left=point.x+"px";
    })

})