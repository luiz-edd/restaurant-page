import "./style.css";

function mainPage() {
  const content = document.querySelector("#content");

  const elements = () => {
    const header = document.createElement("div");
    const home = document.createElement("div");
    const location = document.createElement("div");
    const order = document.createElement("div");
    const container = document.createElement("div");
    const title = document.createElement("div");
    const img = document.createElement("img");
    const footer = document.createElement("div");
    const address = document.createElement("div");
    const about = document.createElement("div");
    const socialMedia = document.createElement("div");

    header.classList.add("header");
    container.classList.add("container");
    footer.classList.add("footer");

    home.textContent = "Home";
    location.textContent = "Location";
    order.textContent = "Order";
    address.textContent = "Address";
    about.textContent = "About";
    socialMedia.textContent = "Social Media";

    img.src = "/img/main-picture.jpeg";

    header.append(home, location, order);
    container.append(img, title);
    title.append(document.createElement("h2"), document.createElement("p"));
    footer.append(address, about, socialMedia);

    title.lastElementChild.textContent = "Best shawarma in the world!";
    title.firstChild.textContent = "Lebanon Food - Augusta";
    return [header, container, footer];
  };

  const addToDoom = () => {
    elements().forEach((element) => {
      content.appendChild(element);
    });
  };
  return { elements, addToDoom };
}

mainPage().addToDoom();

console.log("teste");
