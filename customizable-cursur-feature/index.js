var background=document.getElementById("main")
let cursor=document.getElementById("cursor")

background.addEventListener("mousemove",(dets)=>{
    cursor.style.top=dets.y+"px";
    cursor.style.left=dets.x+"px";
})