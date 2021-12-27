let nav1=document.getElementById("navbar")
let nav2=document.getElementById("navbar2")
let vertical=document.getElementById("ve")
let horizontal=document.getElementById("ho")

vertical.addEventListener('click',function(){
    if(nav2.style.display!="none"){
        nav2.style.display="none";
    }
    else {
        nav2.style.display="block"
    }
})
horizontal.addEventListener('click',function(){
    if(nav1.style.display!="none"){
        nav1.style.display="none";
    }
    else {
        nav1.style.display="flex"
    }
})
console.log('helo')