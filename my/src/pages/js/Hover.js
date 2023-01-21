export class Obj {
 constructor(name, hover, unhover) {
  let list = document.querySelectorAll(name)
  for (let i = 0; i < list.length; i++) {
   list[i].addEventListener("mouseover", () => {
    for (let j = 0; j < list.length; j++) {
     if (list[i] !== list[j]) {
      list[j].style = hover
     }
    }
   })
   list[i].addEventListener("mouseout", () => {
    for (let i = 0; i < list.length; i++) {
     list[i].style = unhover
    }
   })
  }
 }

}