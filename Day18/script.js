const url = "https://restcountries.com/v3.1/all";

fetch(url)
.then((val)=>{
    if(val.status === 200){
        return val.json();
    }
})
.then((val)=>{   
        return(val);
})
.then((response)=>{
        for ( let i =0 ; i < response.length ; i++){
                if(response[i].name.common  === "Japan" || response[i].name.common  === "India" || response[i].name.common  === "Germany" || response[i].name.common  === "Spain")  {
                    let flag = response[i].flags.png;
                    let name = response[i].name.common;
                    let region = response[i].region;
                    let capital = response[i].capital[0];
                    let latlng1 = response[i].capitalInfo.latlng[0];
                    let latlng2 = response[i].capitalInfo.latlng[1];
                    let countryCode = response[i].cca2;

                    function createDOMElement(htmlString) {
                        const template = document.createElement('template');
                        template.innerHTML = htmlString.trim();
                        return template.content.firstChild;
                    }                    

                    const cardHTML = `<div class="card" id="card">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <img src="${flag}" class="card-img-top" alt="...">
                            <p class="card-text">Capital : ${capital}</p>
                            <p class="card-text">Region : ${region}</p>
                            <p class="card-text">Country Code : ${countryCode}</p>
                            <a href="https://api.openweathermap.org/data/2.5/weather?lat=${latlng1}&lon=${latlng2}&appid=37ba9824a231c697643e4a57ef092cf6" class="btn btn-primary">Click for Weather</a>
                            </div>
                    </div>`;
            
                    const cardElement = createDOMElement(cardHTML);
                    const cardContainer = document.getElementById('card-container');
                    cardContainer.appendChild(cardElement);
                }
    }
})
.catch((err)=>{
    console.log("Error",err);
});





 