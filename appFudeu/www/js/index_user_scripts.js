/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Principal */
    
    
        /* button  Sobre */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        alert("Desenvolvedores: Alexandre Azevedo de Albuquerque, Victhor Capasso Peraino.");
        
        /* your code goes here */ 
         return false;
    });
     
        /* button  Principal */
    
     
         /* button Notas */
     $(document).on("click", "#btnNotas", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Notas"); 
         return false;
    });
     
        /* button Calculadora */
     $(document).on("click", "#btnCalculadora", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Calculadora"); 
         return false;
    });
     
        /* button Agenda */
     $(document).on("click", "#btnAgenda", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Agenda"); 
         return false;
    });
     
        /* button Jogos */
     $(document).on("click", "#btnJogos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Jogos"); 
         return false;
    });
    
        /* button  Principal */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_32_71"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
