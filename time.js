function tellage() {

   
    
    
    let input = document.getElementById("age").value;

    let dateEntered = new Date(input);

   let birthyear= dateEntered.getFullYear();
   let birthmonth= dateEntered.getMonth();
let birthsday = dateEntered.getDay();
    let today = new Date();
    let currentyear = today.getFullYear();
    let currentmonth = today.getMonth();
    let currentday = today.getDay();
    let result = +currentyear - +birthyear ;
    let resultm = +currentmonth - +birthmonth;
    let resultd = +currentday - +birthsday;

    let dateofbirgth = ""
    if(resultm < 0 || resultd>0 ){
         dateofbirgth =
         moment(input).format(`MMMM DD, ${currentyear} `);
            }
        else if(resultm > 0 || resultd<0){
             dateofbirgth =
            moment(input).format(`MMMM DD, ${+currentyear + 1} `);
        }
   
    
    

    

  // Set the date we're counting down to
let endDate = new Date(`${dateofbirgth} 00:00:00`).getTime();
// Update the count down every 1 second
let x = setInterval(function() {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now an the count down date
    let distance = endDate - now;
    console.log(distance);
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60* 60 *24 ));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in elements with ides
    document.querySelector('.day').innerText  = (days);  
    document.querySelector('.hours').innerText =("0" + hours).slice(-2);
    document.querySelector('.minute').innerText = ("0" + minutes).slice(-2);
    document.querySelector('.second').innerText = ("0" + seconds).slice(-2);
   
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countContainer").innerHTML = "EXPIRED";
    }
}, 1000);

if(isNaN(input)){
document.querySelector("#visible").classList.remove("hidden");
document.getElementById("demo").innerHTML
     = "You are "+ result+ " year old";
    }
else{
    alert("Enter Date of birth")
}

}
















// const day = document.querySelector(`.day`) ;
// const hour = document.querySelector(`.hours`) ;
// const minute = document.querySelector(`.minute`) ;
// const second = document.querySelector(`.second`) ;

// const birthday = new Date(`${currentyear +1}00:00:00:`)

// function updatecountdown(){
// const crunnttime = new Date();
// const diff =  birthyear -crunnttime; 
// console.log(diff)
// console.log(birthday)
// console.log(crunnttime)

// const d = Math.floor(diff/1000/60/60/24)
// const h = Math.floor(diff/1000/60/60)%24;
// const m = Math.floor(diff/1000/60)%60;
// const s = Math.floor(diff/1000 )%60;

// day.innerHTML=d;
// hour.innerHTML = h<10 ? 0+h:h;
// minute.innerHTML=     m<10 ? 0+m:m;
// second.innerHTML = s< 10 ? 0 + s :s;

// }

// setInterval(updatecountdown,1000);
