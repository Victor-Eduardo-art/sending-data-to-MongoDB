function iniciar () {
   const bNome = document.getElementById('nome')
   const bEmail = document.getElementById('email')
   const bBio = document.getElementById('bio')
   const linkEnviar = document.getElementById('link-enviar')
   
   linkEnviar.addEventListener('click', () => {
      linkEnviar.href = `/add/${bNome.value}/${bEmail.value}/${bBio.value}`
   })
}

window.addEventListener('load', iniciar)  