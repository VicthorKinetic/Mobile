/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnMostrar */
    $(document).on("click", "#btnMostrar", function(evt)
    {
        /* your code goes here */ 
        var nome = $("#txtNome").val();
        
        $("#resposta").html("O seu nome é: " + "<U>" + nome + "</U>");
        
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
