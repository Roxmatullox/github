let searchInput = document.querySelector(".search-input")
let usersRow = document.querySelector(".users-container")
let pagination = document.querySelector(".pagination")

let search = ""


function userCard(user){
  return `
  <div class="user">
  <img src="${user.avatar_url}" alt="">
  <div class="user-text">
    <h3>${user.login.toUpperCase()}</h3>
    <h5>Id : ${user.id}</h5>
    <h5>Type : ${user.type}</h5>
    <a href = "profile.html?profile=${user.login}">Profile  ></a>
  </div>
  </div>
  `
}

let active = 1


function gitUsers() {
  customFetch(`https://api.github.com/${search == "" ? "users":`search/users?q=${search}&page=${active}&per_page=10`}`).then((res)=>{
  if (search == "") {
    all = []
    usersRow.innerHTML = ""
    res.map((el)=>{
      usersRow.innerHTML += userCard(el)
    })
  } else{
    usersRow.innerHTML = ""
    let searchUsers = res.items
    searchUsers.map((el)=>{
      all.push(el)
      usersRow.innerHTML += userCard(el)
    })
  }
  }).catch((err)=>{
    console.log(err);
  })
}

gitUsers()


searchInput.addEventListener("keyup",function(){
  search = this.value
  gitUsers()
  pages()
})



function pages() {
  if (search) {
    function getPagination() {
      pagination.innerHTML = `<button onclick = "setActive('-')">-</button>`
      pagination.innerHTML += `<button>${active}</button>`
      pagination.innerHTML += `<button onclick = "setActive('+')">+</button>`
      gitUsers()
    } 
    getPagination()
  }
}


function setActive(i) {
  if (i == "-") {
    console.log(1);
    active--
    pages()
    gitUsers()
  } else {
    active++
    pages()
    gitUsers()
  }
}