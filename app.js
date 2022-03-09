




function navButton(pg, pr, nv){
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML=""
        nv();
    })
    pr.appendChild(button);

}

function navigation(){
    let nav= document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";

    navButton("home",nav, homepage);
    navButton("about",nav, about);
   navButton("interact",nav, interact);
    document.body.appendChild(nav);
    document.body.appendChild(wrapper)
}

 function homepage(){
    let home = document.createElement("div");
    home.innerHTML= "Home Page";
    document.body.querySelector(".wrapper").appendChild(home);

 }

 function about(){
    let about = document.createElement("div");
    about.innerHTMl="About Page";
    document.body.querySelector(".wrapper").appendChild(about);
}

function interact(){
    let interact = document.createElement("div");
    interact.innerHTMl = "Interact Page";
    document.body.querySelector(".wrapper").appendChild(interact);
}
function incrementValue()
{
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}



navigation();
homepage();
about();
interact();
