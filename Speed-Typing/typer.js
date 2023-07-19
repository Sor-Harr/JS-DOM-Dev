const main = document.querySelector('.main');
const typeArea = document.querySelector('.typer');
const btn = document.querySelector('.btn');
const game = {start:0,end:0,user:"",arrText:""};
const wording =["Are you an animal lover","Do you play video games","How fast can you type","Hello"];
typeArea.disabled = true;
btn.addEventListener('click',(e)=>{
        if(btn.textContent === 'Start'){
            playGame();
            typeArea.disabled = false;
        }else if(btn.textContent === 'Done'){
            typeArea.disabled = true;
            main.style.borderColor = 'white'
            endPlay();
        }
})

function endPlay(){
    const date = new Date();
    game.new = date.getTime();
    const totalTime = ((game.end-game.start)/1000);
    game.user = typeArea.value;
    const correct = checkResult();
    main.style.borderColor = 'white';
    main.innerHTML = `You typed Time:${totalTime}`;
    btn.textContent = 'Start';
}


function checkResult(){
    let val1 = game.arrText.split(" ");
    let val2 = game.user.split(" ");
}


function playGame(){
    let ranText = Math.floor(Math.random()*wording.length);
    main.textContent = wording[ranText]; 
    game.arrText = wording[ranText]; 
    main.style.borderColor = 'red';
    btn.textContent = 'Done';
    const date = new Date();
    game.start = date.getTime();
}