setTimeout(()=>{
    let create = document.createElement("div");
    create.setAttribute("class","target");
    create.setAttribute("id","target");
    create.innerText="10";
    setTimeout(()=>{
        create.innerText="";
    },1000);
    let countdown = document.getElementById("parent");
    countdown.appendChild(create);
    setTimeout(()=>{
        let create = document.createElement("div");
        create.setAttribute("class","target");
        create.setAttribute("id","target");
        create.innerText="9";
        setTimeout(()=>{
            create.innerText="";
        },1000);
        let countdown = document.getElementById("parent");
        countdown.appendChild(create);
        setTimeout(()=>{
            let create = document.createElement("div");
            create.setAttribute("class","target");
            create.setAttribute("id","target");
            create.innerText="8";
            setTimeout(()=>{
                create.innerText="";
            },1000);
            let countdown = document.getElementById("parent");
            countdown.appendChild(create);
            setTimeout(()=>{
                let create = document.createElement("div");
                create.setAttribute("class","target");
                create.setAttribute("id","target");
                create.innerText="7";
                setTimeout(()=>{
                    create.innerText="";
                },1000);
                let countdown = document.getElementById("parent");
                countdown.appendChild(create);
                setTimeout(()=>{
                    let create = document.createElement("div");
                    create.setAttribute("class","target");
                    create.setAttribute("id","target");
                    create.innerText="6";
                    setTimeout(()=>{
                        create.innerText="";
                    },1000);
                    let countdown = document.getElementById("parent");
                    countdown.appendChild(create);
                    setTimeout(()=>{
                        let create = document.createElement("div");
                        create.setAttribute("class","target");
                        create.setAttribute("id","target");
                        create.innerText="5";
                        setTimeout(()=>{
                            create.innerText="";
                        },1000);
                        let countdown = document.getElementById("parent");
                        countdown.appendChild(create);
                        setTimeout(()=>{
                            let create = document.createElement("div");
                            create.setAttribute("class","target");
                            create.setAttribute("id","target");
                            create.innerText="4";
                            setTimeout(()=>{
                                create.innerText="";
                            },1000);
                            let countdown = document.getElementById("parent");
                            countdown.appendChild(create);
                            setTimeout(()=>{
                                let create = document.createElement("div");
                                create.setAttribute("class","target");
                                create.setAttribute("id","target");
                                create.innerText="3";
                                setTimeout(()=>{
                                    create.innerText="";
                                },1000);
                                let countdown = document.getElementById("parent");
                                countdown.appendChild(create);
                                setTimeout(()=>{
                                    let create = document.createElement("div");
                                    create.setAttribute("class","target");
                                    create.setAttribute("id","target");
                                    create.innerText="2";
                                    setTimeout(()=>{
                                        create.innerText="";
                                    },1000);
                                    let countdown = document.getElementById("parent");
                                    countdown.appendChild(create);
                                    setTimeout(()=>{
                                        let create = document.createElement("div");
                                        create.setAttribute("class","target");
                                        create.setAttribute("id","target");
                                        create.innerText="1";
                                        setTimeout(()=>{
                                            create.innerText="";
                                        },1000);
                                        let countdown = document.getElementById("parent");
                                        countdown.appendChild(create);
                                        setTimeout(()=>{
                                            let create = document.createElement("div");
                                            create.setAttribute("class","target");
                                            create.setAttribute("id","output");
                                            create.innerText="HAPPY      INDEPENDANCE            DAY";
                                            let countdown = document.getElementById("parent");
                                            countdown.appendChild(create);
                                        },1800);
                                    },2000);
                                },2700);
                            },2600);
                        },2500);
                    },2400);
                },2300);
            },2200);
        },2100);
    },2000);
},1000);
