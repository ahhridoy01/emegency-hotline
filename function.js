// call button functionality 
let coin=100;

function spendCoin(buttonID){
    document.getElementById(buttonID).addEventListener('click', function(){
        if(coin>=20){
            coin=coin-20
            const increseCoin=document.getElementById('coin-count')
            increseCoin.innerText=coin
        }
        else{
            alert('You have no coins! ')
        }
    })
}

spendCoin('call1')
spendCoin('call2')
spendCoin('call3')
spendCoin('call4')
spendCoin('call5')
spendCoin('call6')
spendCoin('call7')
spendCoin('call8')
spendCoin('call9')