

const products = [{id:1, name1:'MB creatine', Discription:'Mb creatine it is very effective to hold water in muscle',price:10,img:"img/creatine.jpeg" },
            {id:2, name1:'MB whey protein', Discription:'it provides 26 gm protein per scoop', price:20,img:"img/whey.jpeg"},
            {id:3, name1:'MB fish oil', Discription:'it provides more power for weight lifting', price:30,img:"/img/fishoil.jpeg"}]

ContainerProducts = document.getElementById('ContainerProducts');

products.forEach(element => {
            newProduct = document.createElement('div');
            newProduct.className= 'card';
            newProduct.style.width = '18rem';
            newProduct.innerHTML = `<div class="card-body">
                                    <img class="card-img-top" src="${element.img}" alt="card image cap">
                                    <h5 class="card-title">${element.name1}</h5>
                                    <p class="card-text">${element.Discription}</p>
                                    <p class="card-text">${element.price}</p>
                                    <a href="#" class="btn btn-primary" type="button" onclick="addToCart(${element.id});"> Add To Cart</a>
                                    </div>`
            ContainerProducts.appendChild(newProduct);
        });

cart=[];
function showCartProducts(){
    totalPrice=0;
    showCartProducts1 = document.getElementById('showCartProducts');
    showCartProducts1.innerHTML= "";
    cart.forEach(elmn=>{
        cartProduct = document.createElement('div');
        cartProduct.innerHTML=`
                                <h4>${elmn.name1}</h4>
                                <p>${elmn.price}</p>`
        showCartProducts1.appendChild(cartProduct);
        totalPrice+=elmn.price;
        document.getElementById('totalPrice').innerHTML = totalPrice;
    })
}
function addToCart(id){
    addedProduct = products.find(p => p.id === id)
    console.log(addedProduct);
    cart.push(addedProduct);
    console.log(cart);

    document.getElementById('productCount').innerHTML= cart.length;
    showCartProducts();
}
