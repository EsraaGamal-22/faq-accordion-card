function showAns(x){
    var arrow=document.getElementsByClassName("arrow-icon");
    var que=document.getElementsByClassName("Q-content");
    var ans=document.getElementsByClassName("answer");
    console.log(window.getComputedStyle(ans[x-1]).display);

    if(window.getComputedStyle(ans[x-1]).display == 'none' )
    {

        arrow[x-1].style.transform='rotate(360deg)';
        ans[x-1].style.display="block";
        que[x-1].style.fontWeight = "700";
        que[x-1].style.color="black";
    }
    else{
        arrow[x-1].style.transform='rotate(180deg)';
        ans[x-1].style.display="none";
        que[x-1].style.fontWeight = "400";
        que[x-1].style.color="unset";


    }
}
