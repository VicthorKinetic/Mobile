/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     var caixCont1 = 0;
     var caixCont2 = 0;
     var caixCont3 = 0;
     var caixCont4 = 0;
     var caixCont5 = 0;
     
     /* button  #btn1 */
    $(document).on("click", "#btn1", function(evt)
    {
        $("#caixa1").slideToggle(1000);
        caixCont1 +=1; 
        $("#caixa1").html(caixCont1);
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btn2 */
    $(document).on("click", "#btn2", function(evt)
    {
        $("#caixa2").slideToggle(1000);
        caixCont2 +=1;
        $("#caixa2").html(caixCont2);
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btn3 */
    $(document).on("click", "#btn3", function(evt)
    {
        $("#caixa3").slideToggle(1000);
        caixCont3 +=1;
        $("#caixa3").html(caixCont3);
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btn4 */
    $(document).on("click", "#btn4", function(evt)
    {
        $("#caixa4").slideToggle(1000);
        caixCont4 +=1;
        $("#caixa4").html(caixCont4);
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btn5 */
    $(document).on("click", "#btn5", function(evt)
    {
        $("#caixa5").slideToggle(1000);
        caixCont5 +=1;
        $("#caixa5").html(caixCont5);
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
