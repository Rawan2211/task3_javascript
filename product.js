
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    };
    
    function productFetchfunction(){
    fetch("https://dummyjson.com/products/1").then((result) => {
    let myData = result.json();
    console.log(myData);
    return myData;
    
    }).then((values) =>{
       // let data="";
        data = `<div class="card">
            <img src=${values.images[0]} alt="" class="images img-fluid">
            <h3 class="title"> ${values.title} </h3>
            <div class = "description" id="desc"><span class="fw-bold">Description:</span> ${values.description} </div>
            <p class="price"><span class="fw-bold">Price:</span> ${values.price}</p> 
            <p class="discount"><span class="fw-bold">Discount:</span> ${values.discountPercentage}</p> 
            <p class="rating"><span class="fw-bold">Rating:</span> ${values.rating}</p> 
            <p class="brand"><span class="fw-bold">Brand:</span> ${values.brand}</p> 
            <p class="category"><span class="fw-bold">Category:</span> ${values.category}</p>
            <p class="stock"><span class="fw-bold">In stock!:</span> ${values.stock}</p> 
 

        </div>`

        document.getElementById("card").innerHTML=data;
    
    }
    ).catch((err) =>{
    console.log(err);
    });
}
productFetchfunction();

