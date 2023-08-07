let url = "https://www.balldontlie.io/api/v1/players";
 

fetch(url) 
.then((val)=>{
    if(val.status === 200){
        return val.json();
        // getData(val);
    }
})
.then((val)=>{
    let data = val.data;
    // function getData(val){
        for (let i = 0 ; i < data.length ; i++){
            let id = data[i].id;
            let firstname = data[i].first_name;
            let lastname = data[i].last_name;
            let position = data[i].position;

            const ele = document.createElement("p");
            ele.setAttribute("class","data");
            ele.setAttribute("id","data");
            ele.innerHTML = `NAME : ${firstname} ${lastname} -----ID NO : ${id} ----- ${position} POSITION`;
            const ele1 = document.getElementById("demo");
            ele1.appendChild(ele);
        }
    // }
})
.catch((err)=>{
    console.log("Error",err);
});
