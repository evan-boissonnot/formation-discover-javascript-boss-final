function ajaxPagePrincipale() {
  $(document).ready(function() {
    $.ajax({
      url: "http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/api/selfies",
      success: function(result) {
        let html = "";

        result.forEach(element => {
          html +=
            '<div class="container"><div class="row" ><div class="col-sm-9 profil-title mx-auto shadow p-3 mb-5 bg-white rounded" ><h2 >' +
            element.image.title +
            "</h2>" +
            '<img src="' +
            element.image.url +
            '"class="img-fluid col-sm-12 " ></img>' +
            "<div><h3>commentaires</h3><div>";
          element.comments.forEach(element2 => {
            let dateAffichage = new Date(element2.date.slice(0, 10));
            let format = { year: "numeric", month: "long", day: "numeric" };

            html +=
              '<div class="shadow-sm mb-3 bg-light rounded"><div><strong>' +
              element2.wookie.surname +
              "</strong>" +
              "  - Le " +
              dateAffichage.toLocaleDateString("fr-FR", format) +
              ' : </div><div class="h6"> ' +
              element2.content +
              "</div></div>";
          });
          html += "</div></div></div></div></div>";
        });

        $("#main").html(html);
      }
    });
  });
}
