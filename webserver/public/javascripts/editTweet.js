document.addEventListener('DOMContentLoaded', () => {
  const tweetForm = document.querySelector('.editTweetForm')

  tweetForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const status = document.getElementById( 'msg' ).value
    const media_url = document.getElementById( 'img' ).value
    const body = JSON.stringify({ status, media_url })
    console.log( "body:", body )
    var init = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      mode: 'cors',
      cache: 'default',
      body: body
    }
    fetch('/create', init)
    .then( fetchContainer => {
      // localStorage.setItem('log', fetchContainer)
      return fetchContainer.text()
    })
    .then( redirectPath => {
      // localStorage.setItem('log', redirectPath)
      window.location.href = redirectPath
    })
    .catch( error => {
      console.log(error)
    })
  })
})
