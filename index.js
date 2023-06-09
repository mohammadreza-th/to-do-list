// بسم الله الرحمن الرحیم

//V (Variable declaration)===================================
const title = document.getElementById("card__title");
const describtion = document.getElementById("card__describtion");
const importance = document.getElementById("card__importance");
const add = document.getElementById("add");
const editCard = document.querySelector(".edit");
const cardsContainer = document.getElementById("cards__container");
const clearList = document.getElementById("clear__list");
// const closeView = document.getElementById("close__view")
let cards = [];
//F (Functino declaration)===============================
const deleteHandler = () => {
  let deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
};
//F=======================================================
const viewHandler = ()=>{
  const view = document.querySelectorAll(".view");
  view.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
      let   card = event.target.parentElement
      console.log(card.classList);
      card.classList.add("modal");
    })})
}
//F=======================================================
function clearHandler() {
  cardsContainer.innerHTML = "";
  cards = [];
}

//F=======================================================
const setCards = (item) => {
  localStorage.setItem("cards", item);
};
const getCards = () => {
  const value = localStorage.getItem("cards");
  let sValue = JSON.parse(value);
};

//F=======================================================
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
        eventInputs.forEach((i) => {
          i.disabled = false;
        });
        //save buttons handler
      } else if (e.target.classList.contains("save")) {
        e.target.innerText = "edit";
        e.target.className = "edit";
        eventInputs.forEach((i) => {
          i.disabled = true;
        });
      }
    });
  });
};

//F=======================================================
const updateDOMWithCards = () => {
  if (title.value === "" && describtion.value === "") {
    alert("please fill input boxes!");
  } else {
    let newCard = {
      title: title.value,
      describtion: describtion.value,
      importance: importance.value,
    };
    cardsContainer.innerHTML += `
    <div class="card">
        <div class="card-text__container">
            <input class="card__title" type="text" value="${title.value}" disabled/>
            <input type="text" class="card__describtion" value="${describtion.value}" disabled />            
            <input type="range" class="card__importance" value="${importance.value}" min="1" max="5" disabled />            
        </div >
        <div class="buttons">
          <button class="edit fa fa-edit"></button>
          <button class="delete fa fa-trash"></button>
          <button class="view fa fa-display"></button>
        </div>
    </div>`;
    deleteHandler();
    editOrSaveHandler();
    viewHandler();
    cards.unshift(newCard);
  }
};

//E (Event listeners)==========================================
add.addEventListener("click", updateDOMWithCards);
clearList.addEventListener("click", clearHandler);
// closeView.addEventListener("click", closeViewHandler);
function closeViewHandler(){
modal.style.display = "none"}