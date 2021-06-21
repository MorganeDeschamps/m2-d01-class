const databaseIsUp = false

function promiseHandler(resolve, reject){
  if(databaseIsUp) resolve(JSON.stringify({data: "I am data", status: "current"}))
  else reject(new Error("DB is down"))

  // if(dayIsTuesday) resolve("Tuesdays are fun") repeatig a reslve on a settled romise causes an error
}

const awesomePromise = new Promise(promiseHandler)

awesomePromise
 .then(data => console.log(data)) 
 .catch(err => alert(err))
