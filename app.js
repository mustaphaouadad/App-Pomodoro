let form = document.getElementById("form"),
    titre = document.getElementById("titre"),
    Description = document.getElementById("Description"),
    Priorité = document.getElementById("Priorité"),
    submitBtn = document.querySelector(".submit"),
    tachInfo = document.getElementById("data"),
    modal = document.getElementById("myform"),
    b1btn = document.querySelector(".b1");
     titreErrore = document.getElementById("titreErrore");

let getData = localStorage.getItem('newTache') ? JSON.parse(localStorage.getItem('newTache')) : [];
let isEdit = false, editId;
console.log(getData);


showTach();


b1btn.addEventListener('click', () => {
    isEdit = false;
    form.reset();
});


function showTach() {
    tachInfo.innerHTML = ""; 
    getData.forEach((tach, index) => {
        let creatTach = `
        <li class="list-group-item d-flex justify-content-between align-items-center tachDetails">
            <div>
                <h5 class="mb-1">${tach.titre}</h5>
                <p class="mb-1">${tach.Description}</p>
                <small>Priorité: ${tach.Priorité}</small>
            </div>
            <div class="d-flex align-items-center">
                <!-- Checkbox for Task Completion -->
                <div class="form-check me-3">
                    <input class="form-check-input" type="checkbox" id="completeTask${index}" ${tach.completed ? 'checked' : ''} onclick="toggleComplete(${index})">
                    <label class="form-check-label" for="completeTask${index}">
                        Terminée
                    </label>
                </div>
                <button class="btn btn-primary btn-sm me-2" onclick="editTach(${index}, '${tach.titre}', '${tach.Description}', '${tach.Priorité}')" data-bs-toggle="modal" data-bs-target="#myform">
                    <i class="bi bi-pencil-square"></i> 
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteInfo(${index})">
                    <i class="bi bi-trash"></i> 
                </button>
            </div>
        </li>`;
        tachInfo.innerHTML += creatTach; 
    });
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let newTach = {
        titre: titre.value,
        Description: Description.value,
        Priorité: Priorité.value,
        completed: false 
    };

    if (isEdit) {
       
        getData[editId] = newTach;
        localStorage.setItem('newTache', JSON.stringify(getData));
        showTach(); 
    } else {
       
        getData.push(newTach);
        localStorage.setItem('newTache', JSON.stringify(getData));
        showTach(); 
    }

    modal.classList.remove("show"); 
    form.reset(); 
});


function editTach(index, titre, description, priorite) {
    isEdit = true;
    editId = index;

    titre.value = titre;
    Description.value = description;
    Priorité.value = priorite;
}


function deleteInfo(index) {
    getData.splice(index, 1); 
    localStorage.setItem('newTache', JSON.stringify(getData));
    showTach(); 
}


function toggleComplete(index) {
    getData[index].completed = !getData[index].completed;
    localStorage.setItem('newTache', JSON.stringify(getData));
    showTach(); 
}

function validation() {
    let isValid = true;
    titreErrore.textContent = "";

    if (!titre.value.trim()) {
        titreErrore.textContent = "Le titre est obligatoire.";
        titreErrore.style.color = "red";
        isValid = false;
    }

    return isValid;
}






    // --------------------------


//    ----------------------butoooon
document.getElementById("focus").addEventListener("click", function () {
    document.getElementById("timer").textContent = "25:00";
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


   let timeLeft = 1500;
   let interval;

   const updateTime = () =>{
      const minutes =Math.floor(timeLeft/60);
      const seconds = timeLeft % 60;
      timer.innerHTML = 
      `${minutes.toString().padStart(2,"0")}
      :
      ${seconds.toString().padStart(2,"0")}`;
   };
   const startTimer =() =>{
    interval = setInterval(() => {
        timeLeft--;
        updateTime();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTime();
            
        }
    },1000);
    

   };
    
   const stopTimer = () => clearInterval(interval);
   const resetTimer = () =>{
    clearInterval(interval);
    timeLeft = 1500;
    updateTime();
   }
   start.addEventListener("click",startTimer);
   stop.addEventListener("click",stopTimer);
   reset.addEventListener("click",resetTimer);

});

document.getElementById("shortbreak").addEventListener("click", function () {
document.getElementById("timer").textContent = "5:00";
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


   let timeLeft = 300;
   let interval;

   const updateTime = () =>{
      const minutes =Math.floor(timeLeft/60);
      const seconds = timeLeft % 60;
      timer.innerHTML = 
      `${minutes.toString().padStart(2,"0")}
      :
      ${seconds.toString().padStart(2,"0")}`;
   };
   const startTimer =() =>{
    interval = setInterval(() => {
        timeLeft--;
        updateTime();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 300;
            updateTime();
            
        }
    },1000);
    

   };
    
   const stopTimer = () => clearInterval(interval);
   const resetTimer = () =>{
    clearInterval(interval);
    timeLeft = 300;
    updateTime();
   }
   start.addEventListener("click",startTimer);
   stop.addEventListener("click",stopTimer);
   reset.addEventListener("click",resetTimer);
});

document.getElementById("longBreak").addEventListener("click", function () {
    document.getElementById("timer").textContent = "15:00";
    const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


   let timeLeft = 900;
   let interval;

   const updateTime = () =>{
      const minutes =Math.floor(timeLeft/60);
      const seconds = timeLeft % 60;
      timer.innerHTML = 
      `${minutes.toString().padStart(2,"0")}
      :
      ${seconds.toString().padStart(2,"0")}`;
   };
   const startTimer =() =>{
    interval = setInterval(() => {
        timeLeft--;
        updateTime();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 900;
            updateTime();
            
        }
    },1000);
    

   };
    
   const stopTimer = () => clearInterval(interval);
   const resetTimer = () =>{
    clearInterval(interval);
    timeLeft = 900;
    updateTime();
   }
   start.addEventListener("click",startTimer);
   stop.addEventListener("click",stopTimer);
   reset.addEventListener("click",resetTimer);
});

