let url = "https://api.seriesquotes.10cyrilc.me/all";

fetch(url)
.then((val)=>{
    if(val.status === 200){
        return val.json();
    }
})
.then((val)=>{
    console.log(val);
    for(let i = 0; i < val.length ; i++){
        let series = val[i].series;
        let quote = val[i].quote;
        let author = val[i].author;

        const ele = document.createElement("p");
        ele.setAttribute("class","card");
        ele.setAttribute("id","card");
        ele.innerHTML = `SERIES : ${series} </br>" ${quote} "</br> - ${author}`;            
        const ele1 = document.getElementById("card");
        ele1.appendChild(ele);
    }
})