let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgcont=document.querySelector("#msgcont");

let turn="X";
let count=0;

 const winPatterns =[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
 ];

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn==="X"){
            turn="O";
            box.innerText="X";
            box.style.color="red";
        }
        else{
            turn="X";
            box.style.color="green";
            box.innerText="O";
            
        }
       
      
       box.disabled=true;  
       count++;
       let isWinner= checkWinner();

      if(count===9 && !isWinner){
        drawGame();
      }
    });
});

let showWinner=(pos1Val)=>{
    
            msg.innerText="Congratulation! "+msg.innerText+" is "+pos1Val;
            msgcont.classList.remove("hide");
            disableButton();

}
const drawGame=()=>{
    msg.innerText="MATCH TIED!";
    msgcont.classList.remove("hide");
    disableButton();
}
let enableButton=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let disableButton=()=>{
    for(box of boxes){
        box.disabled=true;
        
    }
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
     let pos1Val=boxes[pattern[0]].innerText;
     let pos2Val=boxes[pattern[1]].innerText;
     let pos3Val=boxes[pattern[2]].innerText;

     if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
        if(pos1Val===pos2Val&&pos2Val===pos3Val){
           showWinner(pos1Val);
           return true;
           
            
        }
     }
}
};

const newGame=()=>{
    turn="X";
    count=0;
    enableButton();
    msg.innerText="";
    msgcont.classList.add("hide");
}
newbtn.addEventListener("click",newGame);
reset.addEventListener("click",newGame);