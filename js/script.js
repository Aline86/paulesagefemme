window.onload = init
function init() {
    hover_under_after_click()
    document.querySelectorAll('.a').forEach(elem =>{
        elem.addEventListener('click', function(e){
            document.querySelectorAll('.a').forEach(elem =>{
                elem.style.fontWeight = "lighter"
                elem.style.textDecoration = "none"
            })
            elem.style.fontWeight = "bold"
            elem.style.textDecoration = "underline 1.5px"
            $("#menu-btn").prop('checked', false);
        })
    })
}
window.onscroll = function() {
    myFunction()
};
function hover_under_after_click(){
    document.querySelectorAll('.a').forEach(elem =>{
        elem.addEventListener('mouseenter', function(){
            if(elem.style.textDecoration == "underline 1.5px" && elem.style.textDecoration != "none")
            {
                elem.classList.remove('underline')   
            }
            else {
                elem.classList.add('underline')
            } 
        })
    })
}
function myFunction(){
    var container = document.querySelector(".container");
    if(document.getElementById("formation").offsetTop >= window.pageYOffset)
    {
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none" 
        }) 
    }
    setHref("forma", "formation")
    setHref("apro", "apropos")
    setHref("cont", "contact")
}

function setHref(idhref, idcontainer){
    if (window.pageYOffset + 10 >= document.getElementById(idcontainer).offsetTop ) {
        document.querySelectorAll('.a').forEach(elem =>{
            elem.style.fontWeight = "lighter"
            elem.style.textDecoration = "none" 
        })
        document.getElementById(idhref).style.fontWeight = "bold"
        document.getElementById(idhref).style.textDecoration = "underline 1.5px"   
    }
}
$( document ).ready(function() {
    hover_under_after_click()
});