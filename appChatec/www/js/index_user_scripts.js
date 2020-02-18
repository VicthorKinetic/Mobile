/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnChamada */
    $(document).on("click", "#btnChamada", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnConversa */
    $(document).on("click", "#btnConversa", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnContato */
    $(document).on("click", "#btnContato", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Roubo */
    $(document).on("click", ".uib_w_14", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  É */
    $(document).on("click", ".uib_w_13", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Imposto */
    $(document).on("click", ".uib_w_12", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Relámpago Marquinhos */
    $(document).on("click", ".uib_w_11", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Roger */
    $(document).on("click", ".uib_w_10", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  porno */
    $(document).on("click", ".uib_w_9", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Cremosa <3 */
    $(document).on("click", ".uib_w_8", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Rodofo */
    $(document).on("click", ".uib_w_7", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnChamada */
    $(document).on("click", "#btnChamada", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Chamada"); 
         return false;
    });
    
        /* button  #btnConversa */
    $(document).on("click", "#btnConversa", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Conversa"); 
         return false;
    });
    
        /* button  #btnContato */
    $(document).on("click", "#btnContato", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_45_0"); 
         return false;
    });
    
        /* listitem  Imposto */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_Imposto"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
