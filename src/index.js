import mainStructure from "./mainStructure.js";
import addHomePage from "./home.js";
import addMenuPage from "./menu.js";

addPage();
addHomePage();

// structure.structureElements.header.style.backgroundColor = "black";

function addPage() {
  const structure = mainStructure().addStructureToDoom();
  const home = structure.structureElements.home;
  const contact = structure.structureElements.contact;
  const menu = structure.structureElements.menu;
  const container = structure.structureElements.container;
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
    mainStructure().resetContainer();
  });
  menu.addEventListener("click", () => {
    mainStructure().resetContainer();
    addMenuPage();
  });
}
