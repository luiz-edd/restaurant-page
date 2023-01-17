import "./style.css";
import addHomePage from "./home.js";
import addMenuPage from "./menu.js";

export default function mainStructure() {
  const content = document.querySelector("#content");

  const structureElements = () => {
    const header = document.createElement("div");
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const home = document.createElement("div");
    const contact = document.createElement("div");
    const menu = document.createElement("div");
    const container = document.createElement("div");

    const footer = document.createElement("div");
    const address = document.createElement("div");
    const about = document.createElement("div");
    const socialMedia = document.createElement("div");

    header.classList.add("header");
    container.classList.add("container");
    footer.classList.add("footer");

    home.textContent = "Home";
    contact.textContent = "Contact";
    menu.textContent = "Menu";
    address.textContent = "Social Media";
    about.textContent = "GitHub";
    socialMedia.textContent = "Ifood";

    header.append(home, menu, contact);
    footer.append(address, about, socialMedia);

    //add content to the page home/location/menu when click on header

    return {
      mainStructure: [header, container, footer],
      header,
      container,
      footer,
      structureElements: {
        header,
        nav,
        ul,
        home,
        contact,
        menu,
        container,
        footer,
        address,
        about,
        socialMedia,
      },
    };
  };

  const addStructureToDoom = () => {
    const structure = structureElements();
    structure.mainStructure.forEach((element) => {
      content.appendChild(element);
    });
    return structure;
  };

  const resetContainer = () => {
    const container = document.querySelector(".container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  return { addStructureToDoom, resetContainer };
}
