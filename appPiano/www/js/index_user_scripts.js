/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #btnDo */
    $(document).ready(function(e) {
    $("#btnDo").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/do.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnRe").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/re.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnMi").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/mi.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnFa").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/fa.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnSol").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/sol.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnLa").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/la.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
    
    $("#btnSi").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/si.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         return false;
    });
        
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_1", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
