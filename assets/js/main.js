var i=0,text;
text="the best match services for you";
function typing(){
if(i<text.length){
document.getElementById("text").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,50);

}
}
typing();
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
option1.addEventListener("click",function(e){
        document.querySelector(".doc-3").classList.add("d-none");
        document.querySelector(".last-doc").classList.remove("d-none");
        document.querySelector(".last-doc").classList.add("col-md-3");
        option1.style.background = "rgba(139, 139, 139, 0.702)";
        option2.style.background = "#fff";
        option2.style.border = "1px solid rgba(139, 139, 139, 0.702)";

})
option2.addEventListener("click",function(e){
        document.querySelector(".last-doc").classList.add("d-none");
        document.querySelector(".doc-3").classList.remove("d-none");
        option2.style.background = "rgba(139, 139, 139, 0.702)";
        option1.style.background = "#fff";
        option1.style.border = "1px solid rgba(139, 139, 139, 0.702)";

})