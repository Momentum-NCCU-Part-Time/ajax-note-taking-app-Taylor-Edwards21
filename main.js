const notesContainer= document.querySelector(".notes-container");
const createBtn =document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

function updateStorage(){ 
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () =>{ 
  let inputbBox = document.createElement("p");
  inputbBox.className = "inputBox";
  inputbBox.setAttribute("contenteditable", "true");
  notesContainer.appendChild(inputbBox);
})

notesContainer.addEventListener("click", function(e)){
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();


  }
}





/* const app = { 
  data: { 
    url: "http://localhost:3000/notets",
    notes: []
  },
  /* methods */ 
/*  getNotes: function()
  let container = document.getElementById('container')
  fetch(this.data.url, {
    method: 'GET',
    headers: { "Content-Type": "application/json"}
  }).then.(r => r.json()) { 
  /*.then(
    container.innertext */
 /* console.log(response[0])
  for( let note of response)
    this.data.notes.push(note)
  };
  console.log.app(this.data.notes)
}; 
this.generateNotesHTML(0)

createNewNote: function(){}
/* POST request to save note*/

/*displayCreateForm: function (){}
/* same code as edit, maybe stry a variable? */


/*deleteNote: function (noteId){}

confirmDelete: function () { } 
/* ask user if they are sure they want to delete the app, y/n*/ 

/*editNote: function(){}

displayEditForm: function(note){
/* displays edit form with notes existing title and body prepopulated*/
}

/*generateNotesHTML: function() {
  const container =document.getElementById('container');
  for (let note of this.data.notes) {
    container.innerHTML +=
    <div> ${note.title}</div>
    <div>${note.body}</div>
    <button data-id=${note.id}>EDIT</Button>
    <button class="deleteButton" data-id=${note.id}>DELETE</button>
    </div>


    this.addEventListeners();
  },
  
  addEventListener: function() {
    let deleteButton = document.quweySelectorAll(".deleteButton");
    for (let utton of deletebutton )
  }
    /* add buttons for edit, delete, and completed notes. Use id in database
    to determing which button has been clicked ie: */

  }
  /*main: function()

 /* use event.preventDefault(); to stop weird behavior from happening when clicking on buttons */

}

/*let container = document.getElementById('container')
    
  )
} */