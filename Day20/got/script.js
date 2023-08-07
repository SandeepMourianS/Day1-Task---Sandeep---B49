let url = "https://thronesapi.com/api/v2/Characters";

fetch(url)
.then((val)=>{
    if(val.status === 200){
        return val.json();
    }
})
.then((val)=>{
        for (let i = 0 ; i < val.length ; i++){
            let name = val[i].fullName;
            let family = val[i].family;
            let  title= val[i].title;
            let image = val[i].image;

            const ele = document.createElement("p");
            ele.setAttribute("class","card");
            ele.setAttribute("id","card");
            ele.innerHTML = `TITLE : ${title} </br> NAME : ${name} </br> FAMILY : ${family}`;
            const ele1 = document.getElementById("demo");
            ele1.appendChild(ele);
        }
})
.catch((err)=>{
    console.log("Error",err);
});