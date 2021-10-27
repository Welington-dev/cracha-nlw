const LinksSocialMedia = {
  github: 'welingtonkg',
  youtube: 'welingtonkg',
  facebook: 'welington ap',
  instagram: 'welingtonk',
  twitter: 'welingtonkg'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubprofileinfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
    })
}
getGitHubprofileinfos()
