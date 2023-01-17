import "./style.css";
import addHomePage from "./home.js";
import addMenuPage from "./menu.js";

export default function mainStructure() {
  const content = document.querySelector("#content");

  const structureElements = (() => {
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
    home.addEventListener("click", () => {
      if (
        !(
          container.firstChild !== null &&
          container.firstChild.className ===
            home.textContent.toLocaleLowerCase()
        )
      ) {
        mainStructure().resetContainer();
        addHomePage();
        console.log("generated");
      }
    });
    contact.addEventListener("click", () => {
      mainStructure().resetContainer();
    });
    menu.addEventListener("click", () => {
      mainStructure().resetContainer();
      addMenuPage();
    });

    return {
      mainStructure: [header, container, footer],
      header,
      container,
      footer,
    };
  })();

  const addStructureToDoom = () => {
    structureElements.mainStructure.forEach((element) => {
      content.appendChild(element);
    });
    console.log(structureElements.header);
  };

  const resetContainer = () => {
    const container = document.querySelector(".container");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  };

  return { addStructureToDoom, resetContainer };
}
