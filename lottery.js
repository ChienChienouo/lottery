document.querySelector(".lottery__button").addEventListener("click",function(e){
    var lottery = new Array();
    for(let i =0;i<7;i++){
        let rd = getRandom();
        for(let j = 0;j<7;j++){
            while(lottery[j] == rd){
                rd = getRandom();
            }
        }
        lottery[i] = rd;
    }
    for(let i=0;i<7;i++){
        document.getElementsByClassName("lottery__num")[i].value = lottery[i];
    }
})
function getRandom(){
    return Math.floor(Math.random()*52)+1;
}