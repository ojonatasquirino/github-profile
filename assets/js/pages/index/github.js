(function (){
  /* ---- Constants ---- */

  const URL = 'https://github.com/'

  /* ---- Elements ---- */

  const sectionGithub = document.querySelector('section[name="Github"]')
  const inputGithub = sectionGithub.querySelector('input[name="Github"]')
  const buttonAcessar = sectionGithub.querySelector('button[name="acessar"]')

  /* ---- Events ---- */

  buttonAcessar.addEventListener('click', () => {
    const Github = inputGithub.value
    const url = URL + Github
    navegar(url)
  })

  /* ---- Aux Functions ---- */

  function navegar (url) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_self'
    a.click()
  }

  inputGithub.addEventListener('keyup', function(e){
    if (e.keyCode == 13) {
      const Github = inputGithub.value
      const url = URL + Github
      navegar(url)
    }
  })
  
}())