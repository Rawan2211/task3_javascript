
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    };
    

    const keysValues = window.location.search;
    const urlParams = new URLSearchParams(keysValues);
    const param = urlParams.get('id');


    function productFetchfunction(){
    fetch("https://dummyjson.com/products").then((result) => {
    let myData = result.json();
    return myData;
    
    }).then((myData) => {
        let res=  myData.products;
        res.length=28;
        return res;
}).then((values) =>{

    for (i = 0 ; i<=param ; i++){
        for (j=0 ; j<i; j++){
        data = `<div class="card">
        <img src=${values[j].images[0]} alt="" class="images img-fluid">             
        <h3 class="title"> ${values[j].title} </h3>
        <div class = "description" id="desc"><span class="fw-bold">Description:</span> ${values[j].description} </div>
        <p class="price"><span class="fw-bold">Price:</span> ${values[j].price}</p> 
        <p class="discount"><span class="fw-bold">Discount:</span> ${values[j].discountPercentage}</p> 
        <p class="rating"><span class="fw-bold">Rating:</span> ${values[j].rating}</p> 
        <p class="brand"><span class="fw-bold">Brand:</span> ${values[j].brand}</p> 
        <p class="category"><span class="fw-bold">Category:</span> ${values[j].category}</p>
        <p class="stock"><span class="fw-bold">In stock!:</span> ${values[j].stock}</p> 

        </div>`

        document.getElementById("card").innerHTML=data;
        }

    }

    }).catch((err) =>{

    });
}
productFetchfunction();

