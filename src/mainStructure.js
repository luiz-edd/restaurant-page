import "./style.css";
import addHomePage from "./home.js";
import addMenuPage from "./menu.js";
import logo from "../img/logo.jpg";

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
    const logoImg = new Image();

    const footer = document.createElement("div");
    const instagram = document.createElement("a");
    const address = document.createElement("a");
    const ifood = document.createElement("a");

    header.classList.add("header");
    container.classList.add("container");
    footer.classList.add("footer");

    home.textContent = "Home";
    contact.textContent = "Contact";
    menu.textContent = "Menu";
    instagram.textContent = "Instagram";
    address.textContent = "Address";
    ifood.textContent = "Ifood";
    logoImg.src = logo;
    instagram.href = "https://www.instagram.com/lebanonfoodaugusta/";
    ifood.href =
      "https://www.ifood.com.br/delivery/sao-paulo-sp/lebanon-food-kebab-esfihas-grill-consolacao/d8a81bc8-87d9-4fe0-bf62-455e884da7b2";
    address.href = "https://goo.gl/maps/PQRAP8GMkhsWjA4C9";

    nav.append(home, menu, contact);
    header.append(logoImg, nav);
    footer.append(instagram, address, ifood);

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
        instagram,
        address,
        ifood,
        logoImg,
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
