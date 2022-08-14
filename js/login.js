const URL_LOGIN = 'http://localhost:5000/authorized'

const authorizer = async () => {
    const myUserName = document.getElementById("input-user").value
    const myPassword = document.getElementById("input-password").value
    const resp = await fetch(URL_LOGIN, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: myUserName,
            password: myPassword
        })
    })

   

    if(resp.status === 401){
        alert("USER & PASSWORD TIDAK COCOK\nCOBA ULANGI KEMBALI")
      }else{
        alert("USER & PASSWORD COCOK")
        window.location.replace("/views/login-success.html")
      }

    

  }
