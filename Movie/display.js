const submit= document.getElementById("Cat")
submit.addEventListener("change",(e) =>{
    const category= document.getElementById("Cat").value
   const data = JSON.parse(localStorage.getItem("movieData")) || []
   
     displayWatchTime(data, category);
     averagerating(data, category);
})

function displayWatchTime(data, category) {
    const filteredData = data.filter(movie => movie.category === category);
    let totalWatchtime = 0;
    for(let i=0; i<filteredData.length; i++) {
        totalWatchtime += Number(filteredData[i].time);
    }
    let watchtime = document.querySelector("#pass1");

    watchtime.textContent = totalWatchtime;
    document.querySelector(".three").appendChild(watchtime);
}

function averagerating(data, category){
    const filteredrate = data.filter(movie => movie.category=== category);
    let totalRate=0;
    for(let i=0 ; i<filteredrate.length; i++){
         totalRate += Number(filteredrate[i].rating);
    }
    let star= document.querySelector("#pass2");
    star.textContent =totalRate;
    document.querySelector(".four").appendChild(star);
}