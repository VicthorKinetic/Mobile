/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var nome ="";
    var email = "";
    var ano = 0;
     
     /* button  #btnTestar */
    $(document).on("click", "#btnTestar", function(evt)
    {
        
        nome = $("#txtNome").val();
        email = $("#txtEmail").val();
        ano = $("#txtAno").val();
        
        /* your code goes here */ 
        if((nome === "") || (email === "") || (ano === ""))
        {
          navigator.vibrate(10000000);
          alert("Preencha todos os campos.");
        }
        else
            {
                if ((ano > 2016) || (ano < 1950))
                    {
                       navigator.vibrate(10000000);
                       alert("O ano inserido é inválido, por favor tente novamente.");
                    }
            }
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
