function ajaxLogin(){
    const valider = document.getElementById("valider");
            $.ajax({
                url: "http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/Api/session",
                dataType: "json",
                success: (result) => {
                    console.log(result);
                    valider.addEventListener("click", (event) => {
                        const login = document.getElementById("login").value;
                        const password = document.getElementById("password").value;
                        console.log(login, result.item.surname);
                        if (login == result.item.surname) {
                            event.preventDefault();
                            window.location.href = "liste-wookfie.html";
                        } else {
                            event.preventDefault();
                            $("#message").html("mauvais login");
                        }

                    });
                }
            });
}

