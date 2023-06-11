const container1 = document.querySelector(".sub1");    
const container2 = document.querySelector(".sub2");
const items = document.querySelectorAll(".list");   // items is an array of all the listitems(ie, item1, item2, item3, item4)
const btn = document.querySelector(".btn")
const heading = document.getElementsByClassName("title");


container2.addEventListener("dragover", () => {   // when an item is dragged over to container2, changing its UI
    container2.classList.add("hoverSub2");
});

for(let item of items) {   // looping through each of the listitem in items array
    item.addEventListener("dragstart", (e) => {
        container2.addEventListener("dragover", (e) => {
            e.preventDefault();   // preventing the default behaviour
        });
        container2.addEventListener("drop", (e) => {    // on drop to container2, appending the dragged item to container2
            container2.firstElementChild.appendChild(item);
            heading[0].textContent = "DROPPED!!"    // changing the title when item is dropped
            container2.classList.remove("hoverSub2");   // when an item is dropped into container2, changing its UI back to original
        });  
    });
};


const originalContainer1Html = container1.innerHTML;
btn.addEventListener("click", () => {      // resetting on button click
   container1.innerHTML = originalContainer1Html;
   container2.innerHTML = "";
   heading[0].textContent = ""
   location.reload();   // reloading the page
});
