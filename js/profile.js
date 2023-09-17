let profileRow = document.querySelector(".profile-div")

let query = new URLSearchParams(location.search)
let profileURL = query.get("profile")

function getProfile(profile) {
  return `
  <div class="profile">
  <img src="${profile.avatar_url}" alt="">
  <div class="profile-text">
    <div>
      <h4>Followers: ${profile.followers}</h4>
      <h4>Following: ${profile.following}</h4>
    </div>
    <h2>ID : ${profile.id}</h2>
    <h2>Name : ${profile.name}</h2>
    <h3>Username : ${profile.login}</h3>
    <p>Bio : ${profile.bio}</p>
    <p>Created : ${profile.created_at}</p>
    <p>Git hub URL : <a href="${profile.url}">${profile.url}</a></p>
  </div>
  </div>
  `
}

customFetch(`https://api.github.com/users/${profileURL}`).then((res)=>{
  profileRow.innerHTML = getProfile(res)
  console.log(res);
})

