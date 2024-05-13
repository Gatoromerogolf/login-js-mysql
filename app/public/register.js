document.getElementById('register-form').addEventListener('submit', async e => {
    e.preventDefault();
    console.log(e);
    console.log(e.target.children.passw.value);
    console.log(e.target.children.text.value);
    console.log(e.target.children.user.value);
    const res = await fetch('http://localhost:4000/api/register', {
        method:'POST´',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            passowrd: e.target.children.password.value
        })
});
//Función Flecha (Arrow Function): Se usa e => directamente para definir el parámetro de la función flecha. Este es el formato correcto para las funciones flecha en JavaScript.})
})