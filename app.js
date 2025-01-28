// const start = document.getElementById("start");
// const stop = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const timer = document.getElementById("timer");


//    let timeLeft = 1500;
//    let interval;

//    const updateTime = () =>{
//       const minutes =Math.floor(timeLeft/60);
//       const seconds = timeLeft % 60;
//       timer.innerHTML = 
//       `${minutes.toString().padStart(2,"0")}
//       :
//       ${seconds.toString().padStart(2,"0")}`;
//    };
//    const startTimer =() =>{
//     interval = setInterval(() => {
//         timeLeft--;
//         updateTime();
//         if (timeLeft === 0) {
//             clearInterval(interval);
//             alert("Time's up!");
//             timeLeft = 1500;
//             updateTime();
            
//         }
//     },1000);
    

//    };
    
//    const stopTimer = () => clearInterval(interval);
//    const resetTimer = () =>{
//     clearInterval(interval);
//     timeLeft = 1500;
//     updateTime();
//    }
//    start.addEventListener("click",startTimer);
//    stop.addEventListener("click",stopTimer);
//    reset.addEventListener("click",resetTimer);
