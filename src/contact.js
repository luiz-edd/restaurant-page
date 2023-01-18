export default function addContactContent() {
  const container = document.querySelector(".container");
  const contactBox = document.createElement("div");
  const title = document.createElement("h3");
  const infoBox = document.createElement("div");
  const address = document.createElement("div");
  const mapBox = document.createElement("div");
  const frame = document.createElement("iframe");
  const ifoodTitle = document.createElement("h4");
  const ifoodLink = document.createElement("a");
  const ifoodBox = document.createElement("div");

  contactBox.classList.add("contact");
  infoBox.classList.add("info-box");
  address.classList.add("address");
  mapBox.classList.add("map-box");
  frame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4539766990974!2d-46.65521154905793!3d-23.55213348461231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5835a7be9be5%3A0xd394fefded9f6df9!2sR.%20Augusta%2C%20736%20-%20Consola%C3%A7%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001304-001!5e0!3m2!1spt-BR!2sbr!4v1674002970177!5m2!1spt-BR!2sbr";
  frame.classList.add("maps");
  title.textContent = "Come visit us!";
  address.textContent = "Rua Augusta, 736 - Consolação";
  ifoodTitle.textContent = "Or order direct from your home.";
  ifoodLink.href =
    "https://www.ifood.com.br/delivery/sao-paulo-sp/lebanon-food-kebab-esfihas-grill-consolacao/d8a81bc8-87d9-4fe0-bf62-455e884da7b2";
  ifoodLink.textContent = "Click here to go our ifood page.";

  mapBox.append(frame);
  infoBox.append(title, address);
  ifoodBox.append(ifoodTitle, ifoodLink);
  contactBox.append(infoBox, mapBox, ifoodBox);
  container.append(contactBox);
}
