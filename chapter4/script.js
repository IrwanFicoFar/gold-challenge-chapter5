
let myBatuManImg = document.getElementById("batuMan-img")
let myKertasManImg = document.getElementById("kertasMan-img")
let myGuntingManImg = document.getElementById("guntingMan-img")

let myBatuManColor = document.getElementById("batuMan-color")
let myKertasManColor = document.getElementById("kertasMan-color")
let myGuntingManColor = document.getElementById("guntingMan-color")

let myBatuComColor = document.getElementById("batuCom-color")
let myKertasComColor = document.getElementById("kertasCom-color")
let myGuntingComColor = document.getElementById("guntingCom-color")

let myResult = document.getElementById("result")
let myRefresh = document.getElementById("refresh")
let myGenNum = document.getElementById("gen-num")

let attempt = 0

let myName = prompt("siapa nama anda ?")
let h1Name = document.getElementById("player")
h1Name.innerText = myName.toUpperCase()
console.log(`yuk bermain gunting batu kertas ${myName.toUpperCase()}\n--------------------------`)

// eventListener mouse in/out
const eventListener = (img, color) =>{
    img.addEventListener("mouseenter", () => {
        img.style.cursor = "pointer"
        color.style.backgroundColor = "magenta"
    })
    
    img.addEventListener("mouseout", () => {
        img.style.cursor = "pointer"
        color.style.backgroundColor = "transparent"
    })
}

let myEvent1 = eventListener(myBatuManImg, myBatuManColor)
let myEvent2 = eventListener(myKertasManImg, myKertasManColor)
let myEvent3 = eventListener(myGuntingManImg, myGuntingManColor)

// eventListener tombol refresh
myRefresh.addEventListener("mouseenter", () => {
    myRefresh.style.cursor = "pointer"
    myRefresh.classList.add("animated")
})

myRefresh.addEventListener("mouseout", () => {
    myRefresh.style.cursor = "pointer"
    myRefresh.classList.remove("animated")
})

myRefresh.addEventListener("click", () => {
    let reload = confirm ("yakin mau mengulang game ?")
    if (reload) {
    location.reload()
    console.clear()
} 
})

// display generatedNumber ho many attempt
const genNum = () => {
    attempt
    myGenNum.innerText = `kamu sudah mencoba ${attempt} kali`
    myGenNum.style.color = "black"
    myGenNum.classList.remove("gen-num")
}

// display generatedNumber when man win
const genNumManWin = () => {
    attempt
    myGenNum.innerText = `yeaaa percobaan ke ${attempt} kamu menang !!!`
    myGenNum.style.color = "green"
    myGenNum.classList.add("gen-num")
}

// result display changing 
const manWin = () => {
    genNum()
    myResult.innerText = `${myName.toUpperCase()}\nWIN`
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-com-win")
    myResult.classList.remove("final-result-draw")
    myResult.classList.add("final-result-man-win")
    console.log(`>>> Hasilnya = ${myName.toUpperCase()} MENANG !!!`)
}

const comWin = () => {
    genNum()
    myResult.innerText = "COM\nWIN"
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-man-win")
    myResult.classList.remove("final-result-draw")
    myResult.classList.add("final-result-com-win")
    console.log(`>>> Hasilnya = COM MENANG !!!`)    
}

const draw = () => {
    genNum()
    myResult.innerText = "DRAW\nCUY"
    myResult.classList.remove("vs")
    myResult.classList.remove("final-result-man-win")
    myResult.classList.remove("final-result-com-win")
    myResult.classList.add("final-result-draw")
    console.log(`>>> Hasilnya = REMIS`)
}

// COM choose it self background changing
const comChooseBatu = () => {
    console.log("COM memilih batu")
    myBatuComColor.style.backgroundColor = "grey"
    myKertasComColor.style.backgroundColor = "transparent"
    myGuntingComColor.style.backgroundColor = "transparent"
}

const comChooseKertas = () => {
    console.log("COM memilih kertas")
    myBatuComColor.style.backgroundColor = "transparent"
    myKertasComColor.style.backgroundColor = "grey"
    myGuntingComColor.style.backgroundColor = "transparent"
}

const comChooseGunting = () => {
    console.log("COM memilih gunting")
    myBatuComColor.style.backgroundColor = "transparent"
    myKertasComColor.style.backgroundColor = "transparent"
    myGuntingComColor.style.backgroundColor = "grey"
}


// on click to play game
const clickBatuMan = () => {
    myBatuManColor.style.backgroundColor = "grey"    
    let number = 0
    let randNum = Math.floor(Math.random() * 3)
    console.log(`${myName.toUpperCase()} memilih batu`)
    attempt++
    if (randNum === number) {
        comChooseBatu()
        draw() 
    }
    else if (randNum === 1) {
        comChooseKertas()
        comWin()
    }
    else {
        comChooseGunting()
        manWin()
        genNumManWin()
    }
    console.log(`attempt = ${attempt}\n--------------------------`)
}

const clickKertasMan = () => {
    myKertasManColor.style.backgroundColor = "grey"    
    let number = 1
    let randNum = Math.floor(Math.random() * 3)
    console.log(`${myName.toUpperCase()} memilih kertas`)
    attempt++
    if (randNum === number) {
        comChooseKertas()
        draw()
    }
    else if (randNum === 2){
        comChooseGunting()
        comWin()
    }
    else {
        comChooseBatu()
        manWin()
        genNumManWin()
    }
    console.log(`attempt = ${attempt}\n--------------------------`)
}

const clickGuntingMan = () => {
    myGuntingManColor.style.backgroundColor = "grey"    
    let number = 2
    let randNum = Math.floor(Math.random() * 3)
    console.log(`${myName.toUpperCase()} memilih gunting`)
    attempt++
    if (randNum === number){
        comChooseGunting()
        draw()
    }
    else if (randNum === 0){
        comChooseBatu()
        comWin()
    }
    else{
        comChooseKertas()
        manWin()
        genNumManWin()
    }    
    console.log(`attempt = ${attempt}\n--------------------------`)
}



    

    








