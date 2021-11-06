window.onload = function(){
    const URL="http://localhost:8080/"
    document.getElementById("create").addEventListener('click',function(){
        fetch(URL + "sessions/create",{method:'POST'}).then(r => {
            if(r.ok){
                console.log("Success creating session");
            }
            else{
                console.log("Error creating session");
            }

            if(r.redirected){
                window.location.href = r.url;
            }
        });
    });

    document.getElementById("inputID").addEventListener('submit',(ev)=>{

        ev.preventDefault();
       fetch(ev.target.action,{method:'POST',body: new URLSearchParams(new FormData(ev.target))}).then(r =>{
           if(r.ok){
               console.log('Form with id submitted successfully');
           }
           else{
               console.log('Error submitting id');
           }

           if(r.redirected){
               window.location.href = r.url;
           }
       })
    });
};

