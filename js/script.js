'use strict';

// ********** VARIABLES **********

$(document).ready(function () {
    $.ajax({
        url: 'https://a38acc3c-84d6-4186-87db-ef6e93d0bce1.mock.pstmn.io/wookies',
        dataType: 'json', // parses JSON
        success: function (result) {
            displayWookieGridInContainer(result);
        },
        error: function (error) {
            console.log("Problème lors de la requête ajax.", error);
        }
    })
});

// ********** FUNCTIONS **********

function displayWookieGridInContainer(result) {
    let html = '';
    for (let index = 0; index < result.length; index++) {
        let commentaires = '';
        for (let i2 = 0; i2 < result[index].comments.length; i2++) {
            commentaires += `<p class="m-0">${result[index].comments[i2].wookie.contenu}</p>
                <small class="m-3">de : ${result[index].comments[i2].wookie.surname}</small>`
        };
        html += `
            <div class="col"> 
                <img 
                    class="img-thumbnail"
                    style="min-height: 300px;"
                    src = "${result[index].image.url}"
                    alt = "wookie ${result[index].id}">
                <h5>Commentaires</h5>
                ${commentaires}
            </div>`;
    }
    $("#container").html(html);
}


// ********** LISTENERS **********