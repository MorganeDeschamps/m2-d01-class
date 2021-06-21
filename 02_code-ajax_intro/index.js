const apiRequestPromise = fetch('https://api.spacexdata.com/v3/launches');


apiRequestPromise
.then(response => {
  const data = response.json()
  return data
})
.then( data => {
  console.log(data)

  data.forEach(element => {
    console.log(element)
  });
})