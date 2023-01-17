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
  title.firstChild.textContent = "Lebanon Food - Augusta";

  home.append(mainImg, title);
  container.append(home);
}
