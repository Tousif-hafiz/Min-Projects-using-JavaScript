let content=document.querySelector('h2');

var AddandRem= document.querySelector('button');
var flag=0;
AddandRem.addEventListener("click", ()=>{
    if(flag==1)
    {
        content.innerHTML="Friends";
        content.style.color="green";
        AddandRem.innerHTML="Remove";
        AddandRem.style.backgroundColor="red";
        flag=0;
    }
    else{
        content.innerHTML="Stranger";
        content.style.color="red";
        AddandRem.innerHTML="Add Friend";
        AddandRem.style.backgroundColor="cadetblue";
        flag=1;
    }
})