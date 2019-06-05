function ajaxListeWookfie(){
    $.ajax({
        url: "http://ns3055994.ip-193-70-8.eu/selfie-a-wookie-api/api/selfies",
        dataType: "json",
        success: (result) => {
            let html = "";
            result.forEach(wookie => {
                html +=
                    `<div id="box" class ="row p-3 shadow-lg rounded my-2">
                        <div class="col-4">
                            <h4>${wookie.wookie.surname}</h4>
                            <img src="${wookie.image.url}" class="img-fluid" alt="">
                            <h5>${wookie.image.title}</h5>
                        </div>
                        <div class="col-8 border-left border-info">`;
                console.log(wookie.comments);
                wookie.comments.forEach(com=>{
                    html+=`<div class="text-left my-2 px-3 bg-light rounded">${com.wookie.surname}: ${com.content}</div>`;
                });
                html+=`</div></div>`;
            });
            $("#wookfie").html(html);
        }
    });
}