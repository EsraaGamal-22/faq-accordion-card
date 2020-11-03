function showAns(x){
    var arrow=document.getElementById(x);
    var que=document.getElementsByClassName("Q-content");
    var ans=document.getElementsByClassName("answer");
    if(arrow.style.transform=='rotate(180deg)')
    {
        console.log("if: x-1: "+ (x-1));
        arrow.style.transform='rotate(360deg)';
        ans[x-1].style.display="block";
        que[x-1].style.fontSize = "larger";
        que[x-1].style.fontWeight = "700";
        que[x-1].style.color="black";
        console.log(ans[x]);  
    }
    else{
        arrow.style.transform='rotate(180deg)';
        ans[x-1].style.display="none";
        que[x-1].style.fontSize = "unset";
        que[x-1].style.fontWeight = "400";
        que[x-1].style.color="unset";


    }
}