window.onload = function() {
  const form = document.querySelector("form");
  const email = document.querySelector("#email");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();//Cancela o evento submit
    alert(`O seu e-mail: ${email.value} foi cadastrado com sucesso no RocketNews.`);
  });
}