/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    create();
      
        /* button  #btnGravar */
    $(document).on("click", "#btnGravar", function(evt)
    {
        var nome = $("#nome").val();
        var email = $("#email").val();
        insert(nome,email);
         return false;
    });
    
        /* button  #btnMostrar */
    $(document).on("click", "#btnMostrar", function(evt)
    {
        /* your code goes here */ 
        select();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
