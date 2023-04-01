const title = document.getElementById("card__title");
const describtion = document.getElementById("card__describtion");
const submit = document.getElementById("submit");
const editCard = document.querySelector(".edit");
const deleteCard = document.querySelectorAll(".delete");
const cardsContainer = document.getElementById("cards__container");

submit.addEventListener("click", () => {
  cardsContainer.innerHTML += `<div class="card">
    <div class="card__title">${title.value}</div>
    <div class="card__describtion">
    ${describtion.value}
    </div>
    <button class="edit">edit</button>
    <button class="delete">delete</button>
    </div>`;
});

  deleteCard.forEach((el) => {
    el.addEventListener("click", (event) => {
      console.log("btn");
      event.target.parentElement.remove();
    });
  });

