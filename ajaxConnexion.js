function ajaxConnexion() {
  $(document).ready(function() {
    let identifiantValide;
    let html = "";

    $.ajax({
      url: "http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/Api/session",
      success: function(result) {
        identifiantValide = result.item.surname;
      }
    });

    $("#bouton").click(function(event) {
      let identifiantSaisi = $("#identifiant").val();

      if (identifiantSaisi !== identifiantValide) {
        event.preventDefault();
        html +=
          "<div class=\"text-danger\"><p>L'identfiant n'est pas valide</p></div>";
        $("#message").html(html);
      }
    });
  });
}
