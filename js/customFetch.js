function customFetch(url) {
  let promise = new Promise( async (resolve , reject)=>{
    let res = await fetch(url)
    if (res.ok) {
      let data = await res.json()
      resolve(data)
    } else {
      reject(res.status)
    }
  })

  return promise
}

