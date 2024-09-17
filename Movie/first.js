let submit= document.getElementById("btn")
submit.addEventListener("click", (e) =>{
   let iname= document.getElementById("name").value;
   if(!iname){
    alert("Name can't be empty")
    return ;
   }else{
  localStorage.setItem("nameData" , iname);
  window.location.href="index.html"
   }
})

