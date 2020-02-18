/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
     var resp = "";
     var notas = ["Dó","Ré","Mí","Fá","Sol","Lá","Sí"];
     var aux = -1;
     var indicador = 0;
     var x = new Array(7);
     var aux2 = 0;
    
 function register_event_handlers()
 {
     do
     {
        indicador = Math.floor(Math.random()*7);
         aux ++; 
         x[aux] = notas[indicador];
     }
     while(aux<6);
     $("#Sequencia").text(x);
     
     ReproduzirSom();
 }
    
function ReproduzirSom()
{
    $(document).ready(function(e) {
    $("#btnDo").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/do.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Dó";
         VerificarClick();
         return false;
    });
    
    $("#btnRe").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/re.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Ré";
         VerificarClick();
         return false;
    });
    
    $("#btnMi").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/mi.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Mí";
         VerificarClick();
         return false;
    });
    
    $("#btnFa").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/fa.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Fá";
         VerificarClick();
         return false;
    });
    
    $("#btnSol").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/sol.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Sol";
         VerificarClick();
         return false;
    });
    
    $("#btnLa").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/la.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Lá";
         VerificarClick();
         return false;
    });
    
    $("#btnSi").click(function(e){
        /* your code goes here */ 
         var audio = document.createElement('audio');   
         audio.setAttribute('src', 'jqm/notas/si.mp3');
         audio.setAttribute('autoplay', 'autoplay');
         resp = "Sí";
         VerificarClick();
         return false;
    });
        
    });
}
    
function VerificarClick()
{
      if(resp != x[aux2])
      {
          alert("Você errou a tecla, tente novamente!");
          
          aux = -1;
          
      do
     {
        indicador = Math.floor(Math.random()*7);
         aux ++; 
         x[aux] = notas[indicador];
     }
     while(aux<6);
     $("#Sequencia").text(x);
          
          resp = "";
          indicador = 0;
          aux2 = 0;
          
      }
      else
      {
          aux2++;
          if(aux2>=7)
          {
              alert("Parabéns, você ganhou! Jogue novamente");
              
              aux = -1;
          
      do
     {
        indicador = Math.floor(Math.random()*7);
         aux ++; 
         x[aux] = notas[indicador];
     }
     while(aux<6);
     $("#Sequencia").text(x);
          
          resp = "";
          indicador = 0;
          aux2 = 0;
              
          }
      }
}
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
