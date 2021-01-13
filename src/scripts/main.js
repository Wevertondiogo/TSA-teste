import "./send.js";
import { GetUsers } from "./mock.js";

const select = document.querySelector("select");
// console.log(select);

const creditCard = document.querySelector("#creditCard");
creditCard.checked = true;

$("select").each(function () {
  let $this = $(this),
    numberOfOptions = $(this).children("option").length;

  $this.addClass("select-hidden");
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  let $styledSelect = $this.next("div.select-styled");
  $styledSelect.text($this.children("option").eq(0).text());

  let $list = $("<ul />", {
    class: "select-options",
  }).insertAfter($styledSelect);

  for (let i = 0; i < numberOfOptions; i++) {
    $("<li/>", {
      text: $this.children("option").eq(i).text(),
      rel: $this.children("option").eq(i).val(),
    }).appendTo($list);
  }

  let $listItems = $list.children("li");

  $styledSelect.click(function (e) {
    e.stopPropagation();
    $("div.select-styled.active")
      .not(this)
      .each(function () {
        $(this).removeClass("active").next("ul.select-options").hide();
      });
    $(this).toggleClass("active").next("ul.select-options").toggle();
  });

  $listItems.click(function (e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass("active");
    $this.val($(this).attr("rel"));
    $list.hide();
  });

  $(document).click(function () {
    $styledSelect.removeClass("active");
    $list.hide();
  });
});

// var x, i, j, l, ll, selElmnt, a, b, c;
// /*look for any elements with the class "custom-select":*/
// //x
// const customSelect = document.querySelector("custom-select");
// //l
// lengthCustomSelect = customSelect.length;
// for (let i = 0; i < lengthCustomSelect; i++) {
//   // selElmnt , x
//   const select = customSelect[i].querySelector("select")[0];
//   //ll, selmnt
//   const lengthSelect = select.length;
//   /*for each element, create a new DIV that will act as the selected item:*/

//   //a
//   const div = document.createElement("div");
//   div.setAttribute("class", "select-selected");
//   //a, selemnt,
//   div.innerHTML = select.options[select.selectedIndex].innerHTML;
//   //x , a
//   customSelect[i].appendChild(div);
//   /*for each element, create a new DIV that will contain the option list:*/
//   //b
//   const divHide = document.createElement("DIV");
//   divHide.setAttribute("class", "select-items select-hide");
//   // j, ll
//   for (let i = 1; i < lengthSelect; i++) {
//     /*for each option in the original select element,
//     create a new DIV that will act as an option item:*/
//     // c, j, selemnt
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function (e) {
//       /*when an item is clicked, update the original select box,
//         and the selected item:*/
//       var y, i, k, s, h, sl, yl;
//       s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//       sl = s.length;
//       h = this.parentNode.previousSibling;
//       for (i = 0; i < sl; i++) {
//         if (s.options[i].innerHTML == this.innerHTML) {
//           s.selectedIndex = i;
//           h.innerHTML = this.innerHTML;
//           y = this.parentNode.getElementsByClassName("same-as-selected");
//           yl = y.length;
//           for (k = 0; k < yl; k++) {
//             y[k].removeAttribute("class");
//           }
//           this.setAttribute("class", "same-as-selected");
//           break;
//         }
//       }
//       h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function (e) {
//     /*when the select box is clicked, close any other select boxes,
//       and open/close the current select box:*/
//     e.stopPropagation();
//     closeAllSelect(this);
//     this.nextSibling.classList.toggle("select-hide");
//     this.classList.toggle("select-arrow-active");
//   });
// }
// function closeAllSelect(elmnt) {
//   /*a function that will close all select boxes in the document,
//   except the current select box:*/
//   var x,
//     y,
//     i,
//     xl,
//     yl,
//     arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i);
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// /*if the user clicks anywhere outside the select box,
// then close all select boxes:*/
// document.addEventListener("click", closeAllSelect);

// const customSelect = document.querySelector("custom-select");
// const lengthCustomSelect = customSelect.length;
// for (i = 0; i < lengthCustomSelect; i++) {
//   const select = customSelect[i].querySelector("select")[0];
//   lengthSelect = select.length;

//   const div = document.createElement("div");
//   div.setAttribute("class", "select-selected");
//   div.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
// }
