let root = document.querySelector("#root");
// create Navbar
function createNav() {
  let nav = document.createElement("div");
  let img = document.createElement("img");
  img.style.maxWidth = "122px";
  img.style.height = "100%";
  img.setAttribute("src", "./finsweetLogo.png");
  nav.appendChild(img);
  createLinks(nav);

  // navbar styling
  nav.style.backgroundColor = "#1C1E53";
  nav.style.padding = "16px 48px";
  nav.style.display = "flex";
  nav.style.justifyContent = "space-between";
  nav.style.alignItems = "center";

  // apending navbar in root
  root.appendChild(nav);
}

// create navbar Links
function createLinks(parent) {
  let navLink = ["Home", "About us", "Feature", "Pricing", "FAQ", "Blog"];
  let div = document.createElement("div");

  // Creating the link using for loop
  for (let i = 0; i < navLink.length; i++) {
    let a = document.createElement("a");
    // * set attribute of a
    a.setAttribute("href", `#`);

    // styling the a tag
    // TODO: a.setAttribute("href", `/${navLink[i]}`);
    a.innerHTML = navLink[i];

    // *styling a tag if it is active or not
    if (i == 0) {
      a.style.color = "white";
    } else {
      a.style.color = "#BBBBCB";
    }
    a.style.margin = "0 8px";
    a.style.fontSize = ".9rem";
    div.appendChild(a);
  }
  div.style.display = "flex";
  div.style.alignItems = "center";
  createBTN(div);
  parent.appendChild(div);
}
function createBTN(parent) {
  let btn = document.createElement("button");
  let div = document.createElement("div");

  btn.textContent = "Contact us";

  // btn styling
  btn.style.padding = "8px 28px";
  btn.style.color = "white";
  btn.style.textAlign = "center";
  btn.style.borderRadius = "100px";
  btn.style.fontSize = "1rem";
  btn.style.backgroundColor = "transparent";
  btn.style.border = "2px solid rgba(244, 246, 252, 0.2)";
  btn.style.marginLeft = "16px";

  // btn appendding in div
  div.appendChild(btn);
  parent.appendChild(div);
}

// calling func
createNav();
