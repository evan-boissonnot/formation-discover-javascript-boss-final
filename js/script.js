'use strict';

/*************** FUNCTIONS ***************/

function getElementsAndListenForConnexionPage() {
    const inputSurname = document.getElementById("inputSurname");
    const inputPassword = document.getElementById("inputSize");
    const inputBtnConnexion = document.getElementById("btnConnexion");
    inputBtnConnexion.addEventListener("click", function (event) {
        event.preventDefault();
        authenticate(inputSurname, inputPassword);
    });
}

function displayWookieGridInContainer(result) {
    let html = '';
    for (let index = 0; index < result.length; index++) {
        let commentaires = '';
        for (let i2 = 0; i2 < result[index].comments.length; i2++) {
            commentaires += `<p class="m-0">${result[index].comments[i2].content}</p>
                <small class="m-3">de : ${result[index].comments[i2].wookie.surname}</small>`
        };
        html += `
            <div class="col bg-white m-1 rounded"> 
                <img 
                    class="img-thumbnail"
                    src = "${result[index].image.url}"
                    alt = "wookie ${result[index].id}">
                <h5 class="mt-2 border-top">Commentaires</h5>
                ${commentaires}
            </div>`;
    }
    $("#container").html(html);
}

function authenticate(inputSurname, inputPassword) {
    $(document).ready(function () {
        var surname = inputSurname.value;
        var password = inputPassword.value;
        if(dao.isResponseOk) {
            let isOK = dao.isAuthentificationOK(surname, password);
            if(isOK) {
                // console.log("Authentification réussie.");
                window.location = "accueil.html";
            } else {
                // console.log("Authentification échouée.");
                let html = `<p class="text-danger text-center m-3">Erreur de connexion. Merci de recommencer.</p>`;
                $('#divForError').html(html);
            }
        } else {
            console.log("Erreur (API)");
        }
    });
}

function getAPIWookiesContent() {
        $.ajax({
            url: 'http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/api/selfies',
            dataType: 'json', // parses JSON
            success: function (result) {
                displayWookieGridInContainer(result);
            },
            error: function (error) {
                console.log("Problème lors de la requête ajax.", error);
            }
        })
}