
document.getElementById("ok").addEventListener('click', function(){
  let inputValue = email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  /* console.log(inputValue); */
    if (inputValue.length === 0){
      document.getElementById("erreur").classList.add("red");
      document.getElementById("erreur").innerText = ("Erreur : vous n'avez pas indiqué votre email.");
      
    }
    else if(inputValue != emailRegex){
      document.getElementById("erreur").classList.add("red");
      document.getElementById("erreur").innerText = ("Votre mail n'est pas conforme.");
      return false
      //console.log("email non conforme");
    }
    else{
      document.getElementById("erreur").classList.add("green");
      document.getElementById("erreur").innerText = ("Merci, un email de confirmation vous a été envoyé.");
     //console.log("tout va bien");
    }


});
