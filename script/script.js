let urlAPI = "https://api.pexels.com/v1/search?query=hamsters";

async function callHamsterImages() {
  const response = await fetch(urlAPI, {
    headers: {
      Authorization: "2D1lSw7qd8md6FNr2RMNCdCLOHM4xbSvh6Kl1htVIm6wmy7S6igWFw8k",
    },
  });
  try {
    if (!response.ok) {
      throw new error("ERRORE", error);
    }
    const data = response.json();
    return data;
  } catch (error) {
    console.error("ERRORE", error);
  }
}

async function getImages() {
  const data = await callHamsterImages();
  const arrayImages = [];

  for (let i = 0; i < 10; i++) {
    arrayImages.push(data.photos[i].src.medium);
  }
  console.log(arrayImages);
  return arrayImages;
}

async function assignDataImages(arrayImages) {
  const imagesToReplaceWith = await arrayImages;
  console.log(imagesToReplaceWith);
  const containerImages = document.querySelectorAll(".card.mb-4.shadow-sm");
  console.log(containerImages);
  const editButtonList = document.querySelectorAll(".d-flex.justify-content-between.align-items-center");
  containerImages.forEach((element, index) => {
    element.children[0].classList.add("object-fit-cover");
    element.children[0].style.height = "300px";

    element.children[0].src = imagesToReplaceWith[index];
    console.log(element.children[0]);
  });
  return containerImages;
}

async function loadImages() {
  const loadButton = document.querySelector(".btn.btn-primary.my-2");
  loadButton.addEventListener("click", () => {
    urlAPI = "https://api.pexels.com/v1/search?query=hamsters";
    assignDataImages(getImages());
  });
  const loadSecondaryButton = document.querySelector(".btn.btn-secondary.my-2");
  loadSecondaryButton.addEventListener("click", () => {
    urlAPI = "https://api.pexels.com/v1/search?query=tigers";
    assignDataImages(getImages());
  });
}

function ChangeEditButton() {
  const editButtonList = document.querySelectorAll(".d-flex.justify-content-between.align-items-center");
  console.log(editButtonList);
  editButtonList.forEach((element) => {
    console.log((element.children[0].children[1].textContent = "Hide"));
  });

  return editButtonList;
  console.log(editButtonList);
}

function HideCard(buttonList) {
  buttonList.forEach((element) => {
    element.children[0].children[1].addEventListener("click", (e) => {
      const buttonToHide = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
      console.log(buttonToHide);
      buttonToHide.parentNode.removeChild(buttonToHide);
    });
  });
}

window.addEventListener("load", () => {
  ChangeEditButton();
  loadImages();
  HideCard(ChangeEditButton());
});
