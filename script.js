const setOfWords =["Dussehra is a festival celebrated in the Hindu religion.", "It is one of the most important festivals in India." , "In addition, it is also one of the longest ones.", "People celebrated Dussehra with great enthusiasm and love, throughout the country.", "It is time for rejoicing for everyone.", "The students get ten-day-long holidays from their schools and colleges to thoroughly enjoy this festival."];
const msg=document.getElementById('msg');
const typeWord=document.getElementById('mywords');
const btn=document.getElementById('btn');
let startTime ,endTime;

 
btn.addEventListener('click',function()
{

    console.log("this");
     if( this.innerText == 'Start')
     {
          typeWord.disabled=false;
          playGame();
     }
})