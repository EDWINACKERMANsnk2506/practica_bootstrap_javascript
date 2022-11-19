console.log("ejecutando");
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit',e =>{
    console.log('click en enviar')
    e.preventDefault()
    const datos =new FormData(formulario)
    console.log('campo email', datos.get('emailcampo'))
console.log('campo contraseña', datos.get('passcampo'))
formulario.reset();
});
