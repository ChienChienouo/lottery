document.querySelector(".lottery__button").addEventListener("click",function(e){
    var lottery = new Array();
    for(let i =0;i<7;i++){
        lottery[i] = getRandom();
        for(let j = 0;j < i;j++){
            while(lottery[j] == lottery[i]){
                j = 0;
                lottery[i] = getRandom();
            }
        }
    }
    for(let i=0;i<7;i++){
        document.getElementsByClassName("lottery__num")[i].value = lottery[i];
    }
    console.log(lottery);
})
function getRandom(){
    return Math.floor(Math.random()*52)+1;
}