let elBody = document.querySelector("body");
let elForm = document.createElement("form");
let elInputTitle = document.createElement("input");
let elInputSubtitle = document.createElement("input");
let elInputImgLink = document.createElement("input");
let elInputDate = document.createElement("input");
let elBtn = document.createElement("button");

let elList = document.createElement("ul");



elList.style.listStyle = "none"
elList.style.width = "90%"
elList.style.padding = "0"
elList.style.margin = "30px auto"
elList.style.display = "flex"
elList.style.flexWrap = "wrap"
elList.style.justifyContent = "space-between"



elForm.appendChild(elInputTitle);
elForm.appendChild(elInputSubtitle);
elForm.appendChild(elInputImgLink);
elForm.appendChild(elInputDate);
elForm.appendChild(elBtn);
elBody.appendChild(elForm);
elBody.appendChild(elList);

elForm.style.display = "flex"
elForm.style.backgroundColor = "orange"
elForm.style.borderRadius = "15px"
elForm.style.padding = "15px"
elForm.style.alignItems = "center"
elForm.style.justifyContent = "space-between"
elForm.style.flexWrap = "wrap"
elForm.style.width = "60%"
elForm.style.margin = "30px auto"

elInputTitle.style.fontSize = "20px"
elInputTitle.placeholder = "Kino nomini kiriting"
elInputTitle.style.padding = "5px"
elInputTitle.type = "text"
elInputTitle.style.margin = "10px auto";
elInputTitle.style.borderRadius = "5px";
elInputTitle.style.boxShadow = "0 0 20px 4px white";

elInputSubtitle.style.fontSize = "20px";
elInputSubtitle.placeholder = "Kino subtitle`ini kiriting";
elInputSubtitle.style.padding = "5px";
elInputSubtitle.type = "text";
elInputSubtitle.style.margin = "10px auto";
elInputSubtitle.style.borderRadius = "5px";
elInputSubtitle.style.boxShadow = "0 0 20px 4px white";

elInputImgLink.placeholder = "Biror rasmning url`ini tashlang"
elInputImgLink.style.fontSize = "20px"
elInputImgLink.style.padding = "5px"
elInputImgLink.style.borderRadius = "5px"
elInputImgLink.style.boxShadow = "0 0 20px 4px white"
elInputImgLink.style.margin = "10px auto";


elInputDate.placeholder = "Biror raqam kiriting"
elInputDate.style.margin = "10px auto";
elInputDate.style.fontSize = "20px"
elInputDate.style.padding = "5px";
elInputDate.style.borderRadius = "5px";
elInputDate.style.boxShadow = "0 0 20px 4px white";

elBtn.textContent = "Qo'shish"
elBtn.style.fontSize = "20px"
elBtn.style.padding = "8px 20px"
elBtn.style.margin = "10px auto";
elBtn.style.border = "none";
elBtn.style.borderRadius = "5px";
elBtn.style.boxShadow = "inset 0 0 15px 0 cyan";





films.forEach(element => {

  let elItem = document.createElement('li');
  let elImg = document.createElement("img");
  let elHeading = document.createElement("h2");
  let elText = document.createElement("p");
  let elDate = document.createElement("p");

  elItem.style.maxWidth = "350px"
  elItem.style.width = "100%"
  elItem.style.margin = "20px auto"
  elItem.style.borderRadius = "10px"
  elItem.style.display = "flex"
  elItem.style.boxShadow = "inset 0 0 30px 0px brown"
  elItem.style.flexDirection = "column"
  elItem.style.alignItems = "center"
  elItem.style.textAlign = "center"

    elImg.style.width = "100%"
    elImg.style.borderRadius = "10px"

  elHeading.style.margin = '20px'
  elHeading.style.fontFamily = 'Monotype Corsiva'
  elHeading.style.fontSize = '30px'

  elText.style.fontStyle = "italic"
  elText.style.fontSize = "20px"

  elDate.style.fontStyle = "italic"
  elDate.style.fontSize = "20px"
  elDate.style.margin = "0"

  elImg.src = element.poster
  elHeading.innerHTML = element.title
  elText.innerHTML = element.overview
  elDate.innerHTML = `${new Date(element.release_date).getDay()}. ${new Date(element.release_date).getMonth()}. ${new Date(element.release_date).getFullYear()}`
  // const newObj = {
  //   title: (elHeading.innerHTML = element.title),
  //   poster: (elImg.src = element.poster),
  //   overview: (elText.innerHTML = element.overview)
  // }

  elItem.appendChild(elImg)
  elItem.appendChild(elHeading)
  elItem.appendChild(elText)
  elItem.appendChild(elDate)
  elList.appendChild(elItem)
});
// films.unshift(newObj)