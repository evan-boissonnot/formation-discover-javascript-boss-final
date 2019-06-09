const caseNom = document.getElementById("caseNom");
const monBoutton = document.getElementById("bouton_valider");


// function ajouterCommentaire(){
//   $(document).ready(function () { 
//     $.ajax({
//         url: 'data.json',
//         success: function (result){
//             let html = '';
//             html += '<div>' + result.comment.content + '</div>';
//             $("#comment1").html(html);
//         }
//     })
// });
// }

function verificationLogin() {

  var errorJSON = {
    "error":
    {
     "name": "usageLimitError",
    "echecConnection": "<div class=\"text-danger\">Echec de l'authentification</div>",
      "message": "Usage limit reached. Contact your team admin."
    },
  };


    $.ajax({
        url: 'session.json',
        success: function (result){
          if (caseNom.value == result.item.surname){
            
            let html = '';
                html += '<div class="text-success">Bienvenue ' + result.item.surname + '</div>';
       
            $("#contenant").html(html);
            setTimeout(() => {
                           window.open('duels.html', '_self');
                         }, 2000);
          }  else {              
                   $.ajax({
                     success: function (result) {
                       let html = '';
                       html += '<div>' + errorJSON.error.echecConnection + '</div>';
                       html += '<div class="text-danger"> Veuillez réessayer ' + caseNom.value + '</div>';
                       $("#contenant").html(html);
                     }
                   })           
               }
        }
    })

}

// function leCom(){
//   var x = document.getElementById("commente");
//   alert(x);
// }


monBoutton.addEventListener('click', verificationLogin);

//monComment.addEventListener('click', ajouterCommentaire);


