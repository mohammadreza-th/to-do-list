//Variable declaration:
const title = document.getElementById("card__title");
const describtion = document.getElementById("card__describtion");
const add = document.getElementById("add");
const editCard = document.querySelector(".edit");
const cardsContainer = document.getElementById("cards__container");
document.getElementsByTagName;
//Function declaration:
const deleteHandler = () => {
  let deleteCard = document.querySelectorAll(".delete");
  deleteCard.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
};
//========================================================
const editOrSaveHandler = () => {
  let buttons = document.querySelectorAll(".edit, .save");
  buttons.forEach((b) => {
      b.addEventListener("click", (e) => {
          let eventInputs =
          e.target.parentElement.children[0].querySelectorAll("input");
          //edit buttons handler
          if (e.target.classList.contains("edit")) {
              e.target.innerText = "save";
              e.target.className = "save";
              eventInputs.forEach((i) => {i.disabled =false})
              //save buttons handler
    } else if (e.target.classList.contains("save")) {
        e.target.innerText = "edit";
        e.target.className = "edit";
        eventInputs.forEach((i) => {i.disabled =true})
      }
    });
  });
};
//========================================================

const updateDOMWithCards = () => {
  if (title.value === "" && describtion.value === "") {
    alert("please fill input boxes!");
  } else {
    cardsContainer.innerHTML += `
    <div class="card">
        <div class="card-text__container">
            <input class="card__title" type="text" value="${title.value}" disabled/>
            <input type="text" class="card__describtion" value="${describtion.value}" disabled />            
        </div >
        <button class="edit">edit</button>
        <button class="delete" >delete</button>
    </div>`;
    deleteHandler();
    editOrSaveHandler()  }
};
//========================================================

add.addEventListener("click", updateDOMWithCards);
