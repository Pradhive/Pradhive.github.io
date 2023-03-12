const btn = document.querySelector(".log-btn");
btn.addEventListener("click",function(){
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("id");
    window.open("index.html","_self");

})