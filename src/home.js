import mainPicture from "../img/mainPicture.jpeg";

export default function addHomeContent() {
  const container = document.querySelector(".container");
  const home = document.createElement("div");
  const title = document.createElement("div");
  const mainImg = new Image();
  mainImg.src = mainPicture;

  home.classList.add("home");

  title.append(document.createElement("h2"), document.createElement("p"));
  title.lastElementChild.textContent = "Best shawarma in the world!";
  title.firstChild.textContent = "Lebanon Food Augusta";

  const bottomText = createTitleAndDescription(
    "It's not just Food, It's an Experience.",
    "Lebanon food augusta it's a lebanese restaurante located in the center of Sao paulo in Augusta street. We serve some shawarma, esfiha, hummus, kibe, tabule, lebanese dessert and much more."
  );

  home.append(title, mainImg, bottomText);
  container.append(home);
}

function createTitleAndDescription(title, description) {
  const box = document.createElement("div");
  const titleItem = document.createElement("h3");
  const descriptionItem = document.createElement("div");

  titleItem.textContent = title;
  descriptionItem.textContent = description;
  box.append(titleItem, descriptionItem);

  return box;
}
