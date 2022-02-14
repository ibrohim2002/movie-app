// api url
const api_url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c";

const img_poster = "https://image.tmdb.org/t/p/w1280"
const wrapper = document.querySelector(".wrapper")
// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    for(let a of data.results) {
        let card = document.createElement("div")
        let img = document.createElement("img")
        let div_title = document.createElement("div")
        let title = document.createElement("h3")
        let vote_avg = document.createElement("span")
        let overview = document.createElement("div")
        let overview_h3 = document.createElement("h3")
        
        card.classList.add("card")
        img.classList.add("img")
        img.src = `${img_poster}${a.poster_path}`
        div_title.classList.add("div-title")
        title.innerHTML = a.title
        vote_avg.innerHTML = a.vote_average
        overview.classList.add("overview")
        overview_h3.innerText = "Overview"
        overview.innerHTML = a.overview
        if(a.vote_average >= 8){
            vote_avg.style.color = "lightgreen"
        }else if(a.vote_average >= 5){
            vote_avg.style.color = "orange"
        }else if(a.vote_average < 5){
            vote_avg.style.color = "red"
        }
        wrapper.append(card)
        card.append(img)
        card.append(overview)
        overview.prepend(overview_h3)
        card.append(div_title)
        div_title.append(title)
        div_title.append(vote_avg)
    }
    console.log(data)
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {}
// Function to define innerHTML for HTML table
function show(data) {}