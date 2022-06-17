let btn=document.getElementById("btn")
let modalElem=document.querySelector(".modal-parent")
let sectionElem=document.querySelector("#section")
let xelem =document.querySelector(".X")



btn.addEventListener("click",modal)
xelem.addEventListener("click",hidemodal)


function modal(){
modalElem.style.display="block"
sectionElem.style.filter="blur(20px)"
btn.blur()
}

function hidemodal(){
    modalElem.style.display="none"
    sectionElem.style.filter="blur(0px)"
}


function hmodal(event){
console.log(event)
    if(event.key==="Escape"){

        modalElem.style.display="none"
    sectionElem.style.filter="blur(0px)"
    }
}

document.body.addEventListener("keyup",hmodal)