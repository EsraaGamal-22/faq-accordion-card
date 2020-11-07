var questions = document.getElementsByClassName("question");
var arrow=document.getElementsByClassName("arrow-icon");
var que=document.getElementsByClassName("Q-content");
var ans=document.getElementsByClassName("answer");
// loop through each question
for(i=0; i < questions.length; i++) {
    console.log("for: "+"i: "+ i);
    // add event listener to each question
    questions[i].addEventListener("click", function(){
        var index= this.id-1;
        if(window.getComputedStyle(ans[index]).display == 'none' )
        {
            arrow[index].style.transform='rotate(360deg)';
            ans[index].classList.add("active");
            que[index].style.fontWeight = "700";
            que[index].style.color="black";
        }
        else{
            console.log("else: "+"index: "+ index);

            arrow[index].style.transform='rotate(180deg)';
            ans[index].classList.remove("active");
            que[index].style.fontWeight = "400";
            que[index].style.color="unset";

        }
    });
 
 }

