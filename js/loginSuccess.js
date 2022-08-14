const URL_USER = "http://localhost:5000/user"

const getUser = async () => {
    const resp = await fetch(URL_USER)
    const data = await resp.json()
    return data
  }
  

  const display = async () => {
    let div = document.getElementById("user-list")
    let data = await getUser()
    console.log(data)
    for(let i = 0; i < data.length; i++){
      let h1 = document.createElement("h1")
      h1.innerText = data[i].nama 
      div.append(h1)
    }
  }

  display()