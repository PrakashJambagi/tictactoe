let b =document.querySelectorAll(".box");
let user=document.querySelector('.turn');
var turn='X';
let tapaudio= new Audio("ting.mp3")
let winaudio= new Audio("gameover.mp3")
let game = new Audio("music.mp3")
user.innerHTML=turn
let win=true


// if(win){
//   game.play()
//   }

b.forEach(cell=>{
    cell.addEventListener('click', (e)=>{

    
      if(win){
        if(e.target.textContent===''){
          tapaudio.play()
        e.target.textContent=turn;
        }
      }
      if(win){
        if(check()){
          console.log("win")
          win=false
          game.pause()
          winaudio.play()
          document.getElementById("winner").innerHTML=turn+" is the winner"
        }
      }
        if(win){
       changeturn()
        }

      
    
    });
});


const changeturn=()=>{
    user.innerHTML=turn=turn==='X'?'0':'X';
}



const check=()=>{
    let condition=[
        [0,1,2],
        [3,4,6],
        [0,3,6],
        [6,7,8],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
        
    ];

    for(let i=0;i<condition.length;i++){
        const[a1,a2,a3]=condition[i]
        console.log(a1,a2,a3)
        if(b[a1].textContent!==''&& b[a1].textContent===turn && b[a2].textContent!==''&& b[a2].textContent===turn && b[a3].textContent!==''&& b[a3].textContent===turn){
            return true;
        }
        }
     }


     