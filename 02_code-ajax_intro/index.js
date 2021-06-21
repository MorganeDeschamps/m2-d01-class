const apiRequestPromise = fetch('http://api.spacexdata.com/v3/launches');


apiRequestPromise
.then(response => {
  const data = response.json()
  return data
})
.then( launch => {
  launch.forEach(launch => {
    if (launch.links.mission_patch) {

      const newImage = document.createElement('img');
      newImage.setAttribute('src', launch.links.mission_patch);
      newImage.setAttribute( 'width', 200);
      
      document.body.appendChild(newImage)
    }
  });
})
.catch(error => {
  const div = document.createElement('div');  
  div.innerHTML = `
    <div class="container error">
      <h1>ERROR</h1>
      <h2>${error}</h2>
      <img src="https://vignette.wikia.nocookie.net/battlefordreamisland/images/f/f1/Roboty_book.png/revision/latest?cb=20190908174044" alt="">
    </div>
  `;

  document.body.appendChild(div);
})