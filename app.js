
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,roundscores,activeplayer,gameplay;

score=[0,0];
roundscores=0;
activeplayer=0;

init();
function init(){
    score=[0,0];
    roundscores=0;
    activeplayer=0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');
    var player1='Player1';
    var player2='Player2';
    player1=prompt('Enter first player name');
    player2=prompt('Enter second player name');
    document.querySelector('#name-0').textContent=player1;
    document.querySelector('#name-1').textContent=player2;
    gameplay=true;
}
document.querySelector('.btn-roll').addEventListener('click',function () {
    if(gameplay){
    var dice=Math.floor(Math.random()*6)+1;
    //storing the selection
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    if(dice>1){
        roundscores+=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundscores;
    }else{
        changeplayer();
    }
}
});

document.querySelector('.btn-new').addEventListener('click',init);

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplay){
    score[activeplayer]+=roundscores;
    document.querySelector('#score-'+activeplayer).textContent=score[activeplayer];
    if(score[activeplayer]>100){
        document.querySelector('.player-'+ activeplayer+'-panel').classList.add('winner');
        document.querySelector('#name-'+activeplayer).textContent='WINNER';
        document.querySelector('#current-'+activeplayer).textContent='0';
        gameplay=false;
    }else{
        changeplayer();
    }
}
})
function changeplayer(){
    roundscores=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+ activeplayer+'-panel').classList.remove('active');
        activeplayer=(activeplayer+1)%2;
        document.querySelector('.player-'+ activeplayer+'-panel').classList.add('active');
}
