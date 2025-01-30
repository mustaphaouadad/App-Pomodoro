let form = document.getElementById("form"),
    titre = document.getElementById("titre"),
    Description = document.getElementById("Description"),
    Priorité = document.getElementById("Priorité"),
    submitBtn = document.querySelector(".submit"),
    tachInfo = document.getElementById("data"),
    modal = document.getElementById("myform"),
    b1btn = document.querySelector(".b1");

let getData = localStorage.getItem('newTache') ? JSON.parse(localStorage.getItem('newTache')) : [];
let isEdit = false, editId;
console.log(getData);

// Affichage des tâches
showTach();

// Événement de clic sur le bouton "Add Task"
b1btn.addEventListener('click', () => {
    isEdit = false;
    form.reset();
});

// Fonction d'affichage des tâches
function showTach() {
    tachInfo.innerHTML = ""; // Clear list before appending
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
        tachInfo.innerHTML += creatTach; // Add task to list
    });
}

// Fonction pour enregistrer une nouvelle tâche
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let newTach = {
        titre: titre.value,
        Description: Description.value,
        Priorité: Priorité.value,
        completed: false // Default to not completed
    };

    if (isEdit) {
        // Si on modifie une tâche existante
        getData[editId] = newTach;
        localStorage.setItem('newTache', JSON.stringify(getData));
        showTach(); // Réafficher les tâches après modification
    } else {
        // Si on ajoute une nouvelle tâche
        getData.push(newTach);
        localStorage.setItem('newTache', JSON.stringify(getData));
        showTach(); // Réafficher les tâches après ajout
    }

    modal.classList.remove("show"); // Fermer la modal
    form.reset(); // Réinitialiser le formulaire
});

// Fonction pour modifier une tâche
function editTach(index, titre, description, priorite) {
    isEdit = true;
    editId = index;

    titre.value = titre;
    Description.value = description;
    Priorité.value = priorite;
}

// Fonction pour supprimer une tâche
function deleteInfo(index) {
    getData.splice(index, 1); // Supprimer la tâche
    localStorage.setItem('newTache', JSON.stringify(getData));
    showTach(); // Réafficher les tâches après suppression
}

// Fonction pour changer l'état "complété" d'une tâche
function toggleComplete(index) {
    getData[index].completed = !getData[index].completed;
    localStorage.setItem('newTache', JSON.stringify(getData));
    showTach(); // Réafficher les tâches après modification
}
// validation des titre
  function validation() {
    let isValid = true;
    const titre = document.getElementById("titre");
    const titreErrore=document.getElementById("titreErrore");
    titreErrore.textContent="";

    if (!titre.value.trim()) {
        titreErrore.textContent="Le titre est obligatoire.";
        isValid=false;
    }
    return isValid;
  }





    // --------------------------
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


//    ----------------------butoooon
document.getElementById("focus").addEventListener("click", function () {
    document.getElementById("timer").textContent = "25:00";
});

document.getElementById("shortbreak").addEventListener("click", function () {
    document.getElementById("timer").textContent = "5:00";
});

document.getElementById("longBreak").addEventListener("click", function () {
    document.getElementById("timer").textContent = "10:00";
});

