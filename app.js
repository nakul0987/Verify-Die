document.addEventListener('DOMContentLoaded',()=>{

    const inputArea=document.querySelector('.diceInput');
    const verifyBtn=document.querySelector('.submitBtn');
    let randomNum;

    function randomDiceNumber(){
        randomNum=Math.floor(Math.random()*6)+1;
        // console.log(randomNum);
    }
    randomDiceNumber();

    verifyBtn.addEventListener('click',()=>{
        if(inputArea.value==''){
            alert('🔒Give Dice Number');
        } else{
            if(inputArea.value==randomNum){
                alert('✅Good! You Get it Right');
                inputArea.value='';
                randomDiceNumber();
            } else{
                alert('❌Hardluck, Try Again');
            }
        }
    });

})
