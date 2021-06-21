const databaseIsUp = true

function promiseHandler(resolve, reject){
  if(databaseIsUp) resolve("This string stands for any data that is passed in case Promis resolves with good data")
  else reject(new Error("This is an Error because something in the promise handling has gone wrong"))

  // if(dayIsTuesday) resolve("Tuesdays are fun") repeatig a reslve on a settled romise causes an error
}

const awesomePromise = new Promise(promiseHandler)

awesomePromise
 .then(data => console.log(data)) 
 .catch(err => alert(err))
