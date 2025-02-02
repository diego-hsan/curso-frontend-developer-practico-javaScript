const menuEmail = document.querySelector('.navbar-email')
const menuIcon= document.querySelector('.menuIcon')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetaileCloseIcon =document.querySelector('.product-detail-close')
const menuDesktop = document.querySelector('.desktop-menu')
const menuMobile = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click',toggledesktopMenu)
menuIcon.addEventListener('click',toggleMenuMobile)
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
productDetaileCloseIcon.addEventListener('click',closeProductDetailAside)


function toggledesktopMenu(){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideMenuClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    menuDesktop.classList.toggle('inactive')

}


function toggleMenuMobile(){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideMenuClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    menuMobile.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')
    const isMenuDesktopClosed = menuDesktop.classList.contains('inative')

    if(!isMobileMenuClosed || !isMenuDesktopClosed){
        menuMobile.classList.add('inactive')
        menuDesktop.classList.add('inactive')
    }


    const isProductDetailClose = productDetailContainer.classList.contains('inactive')

     if(!isProductDetailClose){
       productDetailContainer.classList.add('inactive')
     }

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = []

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productList.push({
    name: 'trisiclo',
    price: 80,
    /*image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'*/
    image:'https://purepng.com/public/uploads/large/purepng.com-dirty-vintage-tricycletricycleredchildrens-toytrikekidoldretrovintageplayridetoyantiquetoddlerclassicdirtyrustywornaged-1271525623028yomf5.png'
});


productList.push({
    name: 'moto',
    price: 220,
    /*image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'*/
    image:'https://i.pinimg.com/originals/b5/a8/bd/b5a8bdb5d742a71925d00d85e20ac61c.jpg'
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
      <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
</div>  */

/*for suelto */

/*for (product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')    
    
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')    
    
    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name
    
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    
    const productInfoFigure = document.createElement('figure')
    
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg') 
    
    productInfoFigure.appendChild(productImgCart)
    
    productInfo.appendChild(productInfoDiv)
   productInfo.appendChild(productInfoFigure)
   
   productCard.appendChild(productImg)
   productCard.appendChild(productInfo)
   
   cardsContainer.appendChild(productCard)
}*/
/* por recomendacion para el orden y la reutilizacion de codigo creamos una funcion que contenga el for*/

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}

function renderProduct (arr){
    for (product of productList){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')    
        
        /*creacion de las imagenes */
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        productImg.addEventListener('click',openProductDetailAside)
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')    
        
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p')
        productName.innerText = product.name
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        
        const productInfoFigure = document.createElement('figure')
        
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg') 
        
        productInfoFigure.appendChild(productImgCart)
        
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
       
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
       
        cardsContainer.appendChild(productCard)
    }
}

renderProduct(productList);