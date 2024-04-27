const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookiesWhole = document.querySelector("#cookies-whole")
const btnCookies = document.querySelector("#btn-open")


cookiesWhole.addEventListener('click',handleclickCookie)
btnCookies.addEventListener('click',handleClickMsg)


function handleclickCookie(e){
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}

function handleClickMsg(e){
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
}
