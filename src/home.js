import mainPicture from "../img/mainPicture.jpeg";

export default function addContent() {
  const container = document.querySelector(".container");
  const title = document.createElement("div");
  const mainImg = new Image();
  mainImg.src = mainPicture;

  title.append(document.createElement("h2"), document.createElement("p"));
  title.lastElementChild.textContent = "Best shawarma in the world!";
  title.firstChild.textContent = "Lebanon Food - Augusta";

  container.append(mainImg, title);
}
