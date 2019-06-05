$(document).ready(function () {

    $.ajax({
        url: 'http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/api/selfies',
        success: function (result) {
            console.log(result);
            
            let html = '';

            result.forEach(element => {
             
                html += '<div class="container"><div class="row" ><div class="col-sm-10 profil-title shadow p-3 mb-5 bg-white rounded" ><h2 >'+ 
                element.image.title + '</h2>' +
                '<img src="'+ 
                element.image.url + 
                '"class="img-fluid col-sm-8 " ></img>' + 
                '<div><h3>commentaires</h3><div>'; 
                element.comments.forEach(element2 =>{
                   html += '<div class="shadow-sm mb-3 bg-light rounded"><div><strong>' + element2.wookie.surname + '</strong>' +'</div><div> '+ element2.content + '</div></div>';
                }) 
                html +='</div></div></div></div></div>';
            });
           
            $('#main').html(html);

            
        }
    });

  
    
});



//      <div class="container" >
// // <div class="row" id="photo">
// //     <div class="col-sm-8 profil-title shadow p-3 mb-5 bg-white rounded" ><h2 ></h2>
// //     <img src="" class="img-fluid" >
    
// //     </div>
// //     <div class="col-sm-4 ">
// //         <div class="media border rounded">
// //         <img src="" class="mr-3"  id="img-profil">
// //         <div class="media-body">
// //             <h5 class="mt-0"></h5>
// //         </div>
            
// //         </div>

// //     </div>
// // </div>
// </div>  