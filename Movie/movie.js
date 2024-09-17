const submit= document.getElementById("submit")
submit.addEventListener("click",(e)=>{
   const mname= document.getElementById("name").value
   if(!mname){
    alert("Enter all details")
    return
   }
   const mCat = document.getElementById("Cat").value
   if(!mCat){
    alert("Enter all details")
    return
   }
   const mdate= document.getElementById("date").value
   const duration= document.getElementById("time").value
   const rate= document.getElementById("rating").value

   
// console.table([mname , mCat , mdate , duration , rate])


let movieData=JSON.parse(localStorage.getItem("movieData")) || []
movieData.push({
    name: mname,
    category:mCat,
    date:mdate,
    time:duration,
    rating:rate
});
localStorage.setItem("movieData",JSON.stringify(movieData));
// console.log(movieData)
})