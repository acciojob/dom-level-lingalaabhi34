//your JS code here. If required.
document.addEventListener("DOMContentLoaded",function(){
    let element = document.getElementById("level");
    let domlevel=1;
    while(element && element!==document.documentElement){
        element = element.parentElement;
        domlevel++;
    }
    alert(`The level of the element is:${domlevel}`);
})