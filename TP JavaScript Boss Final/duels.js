$(document).ready(function () {
    $.ajax({
        url: 'duels.json',
        success: function (donneesDuels){
            let html = '';
            
            //Récupérer les images
            donneesDuels.forEach(donnee => {
            console.log(donnee);
            html += '<div class="col-md-3 border"><img src="'+donnee.image.url+'" class="figure-img img-fluid rounded">';

            //Récupérer les commentaires
            donnee.comments.forEach(element => {
                html += '<div> <b>Date:</b> '+ $.datepicker.formatDate('dd MM yy', new Date(element.date)) +'</div>'
                html += '<div> <b>Commentaire:</b> '+ element.content +'</div></br>'
            });

            html+='</div>';

            });
            //Afficher les images et les commentaires dans le "row" situé dans la class "container"
            $(".container .row").html(html);    
        }
    })

    
  });
