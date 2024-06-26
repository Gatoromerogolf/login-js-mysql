// document
//   .getElementById("register-form")
//   .addEventListener("submit", async (e) => {
//     e.preventDefault();
//     console.log(e);
//     console.log(e.target.children.user.value);
//     console.log(e.target.children.email.value);
//     console.log(e.target.children.password.value);

//     try {
//       const res = await fetch("http://localhost:4000/admin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           user: e.target.children.user.value,
//           email: e.target.children.email.value,
//           password: e.target.children.password.value,
//         }),
//       });
//       if (!res.ok) {
//         throw new Error("Network response was not ok " + res.statusText);
//       }

//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.error(
//         "There has been a problem with your fetch operation:",
//         error
//       );
//     }
//   });

const mensajeError = document.getElementsByClassName("error")[0];

document.getElementById("register-form").addEventListener("submit",async(e)=>{
  e.preventDefault();
  console.log(e.target.children.user.value)
  const res = await fetch("http://localhost:4000/api/register",{
    method:"POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({
      user: e.target.children.user.value,
      email: e.target.children.email.value,
      password: e.target.children.password.value
    })
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})
