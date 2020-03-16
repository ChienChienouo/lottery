document.querySelector(".lottery__button").addEventListener("click",function(e){
    var lottery = [];
    for(let i =0;i<7;i++){
        let rd = getRandom();
        if(lottery.indexOf(rd)>0){
            i -= 1;
        }
        else{
            lottery.push(rd);
        }
    }
    show(lottery);
})

function getRandom(){
    return Math.floor(Math.random()*52)+1;
}

function show(lottery){
    for(let i=0;i<7;i++){
        document.getElementsByClassName("number")[i].value = lottery[i];
    }
}