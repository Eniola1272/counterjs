// set initial count
let count = 0;

const value = document.getElementById("value");
// const decrease = document.querySelector(".decrease");
// const increase = document.querySelector(".increase");
// const reset = document.querySelector(".reset");
// const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function(change) {
        // console.log(change.currentTarget.classList);
       const styles = change.currentTarget.classList; // This reveals the class of what we are clicking on
       if (styles.contains("decrease")) {
        count--;
       } else if (styles.contains("increase")) {
        count++
       } else {
        count = 0;
       }
        //    Changing the color 
        if (count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "#000"
        }

       value.textContent = count; //whatever the count variable is will become the text of the element with the id of #value
      

    });

    // Trying this out
    btn.addEventListener("keypress", function(a) {

        console.log(a.currentTarget.classList);

        const styles = e.currentTarget.classList;
        if (a.key === "Enter") {
            styles = "decrease";
            count--;
        } else if (a.key === "Q") {
            styles = "increase";
            count++;
        } else if (a.key === "Spacebar"){
            styles = "reset";
            count = 0;
        }

       if (styles.contains("decrease")) {
        count--;
       } else if (styles.contains("increase")) {
        count++
       } else {
        count = 0;
       }

    })
});


