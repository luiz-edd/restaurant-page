import "./style.css";

export default function mainStructure() {
  const content = document.querySelector("#content");

  const createElements = () => {
    const header = document.createElement("div");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("div");
    const location = document.createElement("div");
    const order = document.createElement("div");
    const container = document.createElement("div");

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
    address.textContent = "Social Media";
    about.textContent = "GitHub";
    socialMedia.textContent = "Ifood";

    header.append(home, location, order);
    footer.append(address, about, socialMedia);

    return {
      mainStructure: [header, container, footer],
      header,
      container,
      footer,
    };
  };

  const addToDoom = () => {
    createElements().mainStructure.forEach((element) => {
      content.appendChild(element);
    });
  };

  const resetContainer = () => {
    const container = document.querySelector(".container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  return { createElements, addToDoom, resetContainer };
}
