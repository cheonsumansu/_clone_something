const searchInput = document.querySelector("#input-search");
const searchButton = document.querySelector("#button-search");
const headerIcon = document.querySelector("#header-icon");
const loginButton = document.querySelector("#button-login");

loginButton.addEventListener("click", ()=>
    location.href = `https://accounts.google.com/v3/signin/identifier?dsh=S-1274338528%3A1685337768327525&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&ifkv=Af_xneHNCsqyVk3Q54WW4cIJrGroBOcwYYujGXfmM3ht2lGsvfZHhSP62krA3AYkk-SbySUz6WHJtQ&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin`);

searchInput.addEventListener("keydown", (e)=> {
    if(e.code==="Enter") {
        googleSearch();
    }
});
searchButton.addEventListener("click", ()=> {
    if(searchInput.value!=="") {
        googleSearch();
    }
});

headerIcon.addEventListener("mouseenter", ()=> 
    headerIcon.classList.toggle("circle-click"));
headerIcon.addEventListener("mouseleave", ()=>
    headerIcon.classList.toggle("circle-click"));

function googleSearch() {
    const inputValue = searchInput.value;
    location.href = `https://www.google.com/search?q=${inputValue}`;
}
