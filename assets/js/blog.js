
// news api
getNews();
var newsArr = [];
async function getNews() {
var response =  await fetch("https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=ba609d35d16442db92679e81b37aa089");
var data = await response.json();
newsArr = data.articles;
displayData();
}
function displayData() {
	var result = ``;
	for (var i =0 ; i< newsArr.length;i++){
                if (newsArr[i].urlToImage==null)
                continue;
		result+=`
                <div class=" news-section d-flex my-5">
                <div class="news-content">
                    <h3><a href="${newsArr[i].url}">${newsArr[i].title}</a></h3>
                    <p class="p1">${newsArr[i].description}</p>
                    <p class="p2">${newsArr[i].author}</p>
                </div>
                <img src="${newsArr[i].urlToImage}" alt="image" width="400px" height="300px">
                </div>
		`;
	}
	document.querySelector(".news").innerHTML=result;
}
let firstButton = document.querySelector(".h22");
let secondButton = document.querySelector(".h21");
firstButton.addEventListener('click',function(e){
        firstButton.classList.remove("h22");
        firstButton.classList.add("h21");
        firstButton.classList.add("card");
        secondButton.classList.remove("h21");
        secondButton.classList.remove("card");
        secondButton.classList.add("h22");
    })
    secondButton.addEventListener('click',function(e){
        secondButton.classList.remove("h22");
        secondButton.classList.add("h21");
        secondButton.classList.add("card");
        firstButton.classList.remove("h21");
        firstButton.classList.remove("card");
        firstButton.classList.add("h22");
    })