function serverDataHandler(resolve, reject){
   const DBisUp = false
  const data ={
    item: 'MacBook Pro 16',
    price: 2600,
    year: 2020,
    img: "https://www.macnificos.com/sites/files/styles/product_page/public/images/product/macbook-16-1_1.jpg" 
  }

  const error = new Error("Unable to reach server..")

  if(DBisUp) resolve(data)
  else reject(error)
}

const serverQuery = new Promise(serverDataHandler)



function updateDOMWithData(data){
  const div = document.createElement("div")
  div.innerHTML = `
<div class="container">
  <article class="product">
    <img src="${data.img}" alt="">
    <h3>${data.item}</h3>
    <h3>${data.price}</h3>
    <h4>Year: ${data.year}</h4>
  </article>
</div>
  `
  document.body.appendChild(div);
}

function updateDOMWithError(err){
  const div = document.createElement("div")
  div.innerHTML = `
<div class="container error">

  <article class="product">
  <h1>ERROR</h1>
    <p>${err}</p>
    <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
  </article>
</div>
  `
  document.body.appendChild(div);
}



serverQuery
  .then(data => updateDOMWithData(data))
  .catch(err => updateDOMWithError(err))