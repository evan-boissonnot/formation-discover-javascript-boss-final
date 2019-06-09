
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



/* $(document).ready(function () {
  $.ajax({
    url: 'https://a38acc3c-84d6-4186-87dhttp://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/Api/sessionb-ef6e93d0bce1.mock.pstmn.io/session',
    type: "GET",

    success: function (res) {
      const obj = res.item.surname;
      const listener = document.getElementById("sendForm");

      function onClick(event) {
        if (document.getElementById('username').value == obj) {
          event.preventDefault();
          window.location.href("main.html");
        } else {
          alert('Erreur, veuillez renseigner un nom d\'utilisateur valide.');
        }

      }
      listener.addEventListener('click', onClick);
    }
  });

}); */