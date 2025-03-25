let userInput = document.getElementById("searchInput");
let searchResultsCnt = document.getElementById("searchResults");
let  spinner = document.getElementById("spinner");
let notFound = document.getElementById("notFound");


function createAndAppendSearchResults(result){
    let resultItemCnt = document.createElement("div");
    resultItemCnt.classList.add("result-item");

    let {title,link,description} = result;

    let itemtitle = document.createElement("a");
    itemtitle.classList.add("result-title");
    itemtitle.setAttribute("href",link);
    itemtitle.setAttribute("target","_blank");
    itemtitle.textContent=title;
    resultItemCnt.appendChild(itemtitle);
    resultItemCnt.appendChild(document.createElement("br"));
    
    let itemLink = document.createElement("a");
    itemLink.classList.add("result-url");
    itemLink.setAttribute("href",link);
    itemLink.setAttribute("target","_blank");
    itemLink.textContent=link;
    resultItemCnt.appendChild(itemLink);
    resultItemCnt.appendChild(document.createElement("br"));

    let itemDescription = document.createElement("p");
    itemDescription.classList.add("link-description");
    itemDescription.textContent=description;
    resultItemCnt.appendChild(itemDescription);
    resultItemCnt.appendChild(document.createElement("br"));

    searchResultsCnt.appendChild(resultItemCnt)
}


function displayResults(searchResults){
    spinner.classList.toggle("d-none");
    if(searchResults.length===0){
        notFound.classList.remove("d-none");
    }
    else{
        for(let item of searchResults){
            createAndAppendSearchResults(item);
        }
    }
}


function searchwiki(event){
    if(event.key==="Enter"){
        notFound.classList.add("d-none");
        spinner.classList.toggle("d-none");
        searchResultsCnt.textContent="";
        let searchInput = userInput.value;
        userInput.value="";
        
       let URL = "https://apis.ccbp.in/wiki-search?search="+searchInput;
       let options={
        method:"GET",
       }
       fetch(URL,options)
       .then(function (response){
            return response.json();
       })
       .then(function(jsonData){
        let {search_results} = jsonData;
        displayResults(search_results);
       });
    }
}

userInput.addEventListener("keydown",searchwiki);