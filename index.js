// Var Delegations 
var button = document.querySelector(".hamburger-btn")
var dropDown = document.querySelector(".hamburger-menu")
var menu = document.querySelector(".menu")

// Open and Close Hamburger Menu Function

function openClose(e) {
    dropDown.classList.toggle("show-menu")
    button.focus()
    console.log('clicked button')
    if (dropDown.classList.contains("show-menu")){
        button.setAttribute ("aria-expanded", true)
    } else {
        button.setAttribute ("aria-expanded", false)
    }
  }
  
button.onclick = openClose




