import shawarmaImg from "../img/shawarma.jpg";
import homus from "../img/homus.jpeg";
import esfiha from "../img/esfiha.jpg";

export default function addMenuPage() {
  const container = document.querySelector(".container");
  const content = document.createElement("div");

  content.classList.add("menu");

  const shawarmaItem = createItemMenu(
    shawarmaImg,
    "Shawarma",
    "Arabic bread rooled in chicken, fries, lettuce, tomato and cucumber, with a specio garlic mayo",
    "R$29,90"
  );
  const homusItem = createItemMenu(
    homus,
    "Homus",
    "Arabic bread roo paste originating in the Middle East that is traditionally made of pureed or mashed cooked chickpeas mixed with tahini—a toasted sesame condiment—and diced garlic, lemon juice, and saltled in chicken, fries, lettuce, tomato and cucumber, with a specio garlic mayo",
    "R$39,90"
  );
  const esfihaItem = createItemMenu(
    esfiha,
    "Esfiha",
    "Delicios esfiha with diferent flavors, like steak, cheese, calabresa, white cheese  ",
    "R$9,90"
  );
  content.append(shawarmaItem, homusItem, esfihaItem);
  container.append(content);
}

function createItemMenu(
  imgContent,
  itemTitleContent,
  itemDescriptionContent,
  itemPriceContent
) {
  const itemBox = document.createElement("div");
  const img = new Image();
  const itemTitle = document.createElement("h2");
  const itemDescription = document.createElement("p");
  const itemPrice = document.createElement("div");
  const itemTextBox = document.createElement("div");

  itemBox.classList.add("item-box");
  img.classList.add("img-menu");
  itemTitle.classList.add("item-title");
  itemDescription.classList.add("item-description");
  itemPrice.classList.add("item-price");
  itemTextBox.classList.add("item-text-box");

  img.src = imgContent;
  itemTitle.textContent = itemTitleContent;
  itemDescription.textContent = itemDescriptionContent;
  itemPrice.textContent = itemPriceContent;
  // itemTextBox.append(itemTitle, itemDescription, itemPrice)
  itemBox.append(img, itemTitle, itemDescription, itemPrice);
  return itemBox;
}
