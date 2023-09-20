
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};
function fetchFunction(){
fetch("https://dummyjson.com/products").then((result) => {
let myData = result.json();
return myData;

}).then((myData) => {
let res=  myData.products;
res.length=28;
return res;
}).then((res) =>{
    let data="";
    res.map((values)=>{
    

        data+=`<div class="card">
        <img src=${values.images[0]} alt="" class="images img-fluid">
        <h3 class="title"> ${values.title} </h3>
        <p class="price"><span class="fw-bold">Price:</span> ${values.price}</p>    
        <button id ="btn" onclick="showDetailsButton(${values.id})" >Show Details</button>

    </div>`

    })
    document.getElementById("cards").innerHTML=data;

}
).catch((err) =>{

});
}
fetchFunction();



function searchElement() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card');
    if(input){
        
        for (i = 0; i < x.length; i++) { 
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display="none";    
            }
            else {
                x[i].style.display="card";                            
            }
        }
    }
    else{
        fetchFunction();
    }
    
}




function showDetailsButton(idValue){


    window.location.href=`product.html?id=${idValue}`;

};






