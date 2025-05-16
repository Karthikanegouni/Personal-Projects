let winner_container = document.getElementById("winner-text");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playBtn = document.getElementById("playBtn");
let cpu_img = document.getElementById("cpu_img");
let user_img = document.getElementById("user_img");



let user_choice = "";
let state = {
    winner_state:["PR","SP","RS"],
    loss_state:["RP","PS","SR"],
    draw_state:["RR","PP","SS"]
}
playBtn.style.visibility="hidden";

function disable(){
    playBtn.style.visibility="";
    rock.classList.add("disabled");
    paper.classList.add("disabled");
    scissors.classList.add("disabled");
}
function enable(){
    playBtn.style.visibility="hidden";
    rock.classList.remove("disabled");
    paper.classList.remove("disabled");
    scissors.classList.remove("disabled");
}

function cpu() {
    let index = Math.ceil(Math.random() * 3);
    let choice_arr = {
      1: "R",
      2: "P",
      3: "S",
    };
    return choice_arr[index];
  }  

function display_cpu(cpu_choice){
    if(cpu_choice==="R"){
        cpu_img.className="";
        cpu_img.classList.add("cpu-hand","fa-solid","fa-hand-back-fist");
    }
    else if(cpu_choice==="P"){
        cpu_img.className="";
        cpu_img.classList.add("cpu-hand","fa-solid","fa-hand");
    }
    else{
        cpu_img.className="";
        cpu_img.classList.add("cpu-hand","fa-solid","fa-hand-scissors");
    }
}

function play(){
    let cpu_choise = cpu();
    display_cpu(cpu_choise);
    let res = user_choice+cpu_choise;
    if(state["winner_state"].includes(res)){
        winner_container.textContent="You Win";
        winner_container.style.color="green";
        user_img.classList.add("fa-bounce");
        user_img.style.color="green";
        cpu_img.classList.add("fa-fade");
        cpu_img.style.color="red";
    }
    else if(state["loss_state"].includes(res)){
        winner_container.textContent="You Loss";
        winner_container.style.color="red";
        cpu_img.classList.add("fa-fade");
        cpu_img.style.color="green";
        user_img.classList.add("fa-fade");
        user_img.style.color="red";
    }
    else{
        winner_container.textContent="Its a Draw";
        winner_container.style.color="yellow";
        cpu_img.classList.add("fa-fade");
        cpu_img.style.color="lightblue";
        user_img.classList.add("fa-fade");
        user_img.style.color="lightblue";
    }
    console.log(res);
}

playBtn.addEventListener('click',function(){
        enable();
        user_img.className="";
        user_img.classList.add("user-hand","fa-solid","fa-hand-back-fist");
        cpu_img.className="";
        cpu_img.classList.add("cpu-hand","fa-solid","fa-hand-back-fist");
        user_img.style.color="";
        cpu_img.style.color="";
        winner_container.innerHTML="";
});


rock.addEventListener("click", function () {
    user_choice="R";
    user_img.className="";
    user_img.classList.add("user-hand","fa-solid","fa-hand-back-fist");
  play();
  disable();
});
paper.addEventListener("click", function () {
    user_choice="P";
    user_img.className="";
    user_img.classList.add("user-hand","fa-solid","fa-hand");
    play();
    disable();
});
scissors.addEventListener("click", function () {
    user_choice="S";
    user_img.className="";
    user_img.classList.add("user-hand","fa-solid","fa-hand-scissors");
    play();
  disable();
});

