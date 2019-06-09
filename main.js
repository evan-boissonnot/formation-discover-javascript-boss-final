function afficherSelfies () {
    $(document).ready(function () {

        let html ="";
        const tab = [];
        

        $.ajax({
            url: 'http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/api/selfies',
            type: "GET",
            success: function (result) {
                
                result.forEach(element => {
                    let commentstab = [];
                    
                    element.comments.forEach(element2 => {
                    commentstab.push(element2.content)
                });
                    wookie = new Wookie(element.id, element.image.title, new Date(element.date), element.wookie.surname, element.image.url, commentstab 
                        );
                    tab.push(wookie);
                });

                tab.forEach(element => {
                    console.log(element);
                    
                })

                tab.forEach( wookie => {
                    let dateFr = {year: "numeric", month: "long", day: "numeric"};
                    html+= '<div class ="shadow p-3 mb-5 bg-white rounded><div class="row"><div> <h2>' + wookie.title + '</h2> </div> <div> <img src="' + wookie.image + '"> </div> <div><p>Publié le : ' +wookie.date.toLocaleDateString("fr-FR", dateFr) +'</p></div> <div>Nom : '+ wookie.name+'</div> <div>Commentaires : </div>';
                     wookie.comments.forEach(comment =>{
                        html+= '<div> '+ comment + '</div>';
                    });
                    html+='</div>';

                });
                
                $("#main").html(html);

                
            }
        })
    })
}