const title = document.getElementById("card__title");
const describtion = document.getElementById("card__describtion");
const save = document.getElementById("save");
const editCard = document.querySelector(".edit");
const cardsContainer = document.getElementById("cards__container");

const deleteHandler = () => {
  let deleteCard = document.querySelectorAll(".delete");
  deleteCard.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.target.parentElement.remove();
    });
  });
};

const updateDOMWithCards = () => {
  cardsContainer.innerHTML += `<div class="card">
    <div class="card__title">${title.value}</div>
    <div class="card__describtion">
    ${describtion.value}
    </div>
    <button class="edit">edit</button>
    <button class="delete" >delete</button>
    </div>`;
    deleteHandler()
};

save.addEventListener("click", updateDOMWithCards);
