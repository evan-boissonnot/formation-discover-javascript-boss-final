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
                    wookie = new Wookie(element.id, element.date, element.wookie.surname, element.image.url, commentstab 
                        );
                    tab.push(wookie);
                });

                tab.forEach(element => {
                    console.log(element);
                    
                })
            }
        })
    })
}