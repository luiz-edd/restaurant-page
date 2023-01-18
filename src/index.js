import mainStructure from "./mainStructure.js";
import addHomePage from "./home.js";
import addMenuPage from "./menu.js";
import addContactPage from "./contact.js";

addPage();
addHomePage();

// structure.structureElements.header.style.backgroundColor = "black";

function addPage() {
  const structure = mainStructure().addStructureToDoom();
  const home = structure.structureElements.home;
  const contact = structure.structureElements.contact;
  const menu = structure.structureElements.menu;
  const container = structure.structureElements.container;
  const logo = structure.structureElements.logoImg;
  home.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className === home.textContent.toLocaleLowerCase()
      )
    ) {
      mainStructure().resetContainer();
      addHomePage();
      console.log("generated");
    }
  });
  contact.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className ===
          contact.textContent.toLocaleLowerCase()
      )
    ) {
      mainStructure().resetContainer();
      addContactPage();
      console.log("generated");
    }
  });
  menu.addEventListener("click", () => {
    if (
      !(
        container.firstChild !== null &&
        container.firstChild.className === menu.textContent.toLocaleLowerCase()
      )
    ) {
      mainStructure().resetContainer();
      addMenuPage();
      console.log("generated");
    }
  });
  logo.addEventListener("click", () => {
    mainStructure().resetContainer();
    addHomePage();
    console.log("generated");
  });
}
