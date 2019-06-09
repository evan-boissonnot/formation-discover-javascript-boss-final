
function login() {
  $(document).ready(function () {
    
    let username;
    let html = "";

    $.ajax({
      url: 'http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/Api/session',
      success: function (result) {
        username = result.item.surname;
      }
    });

    $("#sendForm").click(function (event) {
      console.log('3ok');
      
      const attempt = document.getElementById("username").value;
      
      
      if ((username !== attempt) |(attempt =="")) {
        event.preventDefault();
        alert('Échec de la connexion. Veuillez vérifier vos identifiants.')
      }
    })
    
    
  })
}


