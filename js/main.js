let elBody = document.querySelector("body");
let elList = document.createElement("ul");

elList.style.listStyle = "none"
elList.style.width = "90%"
elList.style.padding = "0"
elList.style.margin = "30px auto"
elList.style.display = "flex"
elList.style.flexWrap = "wrap"
elList.style.justifyContent = "space-between"

films.forEach(element => {

  let elItem = document.createElement('li');
  let elHeading = document.createElement("h2");
  let elImg = document.createElement("img");
  let elText = document.createElement("p");


  elItem.style.maxWidth = "350px"
  elItem.style.width = "100%"
  elItem.style.margin = "20px auto"
  elItem.style.display = "flex"
  elItem.style.flexDirection = "column"
  elItem.style.alignItems = "center"
  elItem.style.textAlign = "center"

  elHeading.style.margin = '20px'
  // elHeading.style.whiteSpace = 'nowrap'
  elHeading.style.fontFamily = 'Monotype Corsiva'
  elHeading.style.fontSize = '30px'

  elImg.style.width = "100%"
  elImg.style.borderRadius = "10px"

  elText.style.fontStyle = "italic"
  elText.style.fontSize = "20px"

  // let elFilmTitle = elHeading.innerHTML
  elHeading.innerHTML = element.title
  elImg.src = element.poster
  elText.innerHTML = element.overview

  // const newObj = {
  //   title: (elHeading.innerHTML = element.title),
  //   poster: (elImg.src = element.poster),
  //   overview: (elText.innerHTML = element.overview)
  // }

  elItem.appendChild(elHeading)
  elItem.appendChild(elImg)
  elItem.appendChild(elText)
  elList.appendChild(elItem)
  elBody.appendChild(elList)
});
// films.unshift(newObj)