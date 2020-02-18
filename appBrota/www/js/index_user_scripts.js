/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    var pontos = 0;
    var tempo = 60;
  
    $(document).on("click","#elemento",function(evt)
    {if(tempo > -1)
     {
      pontos++; 
      $("#txtPontos").text("Pontos: " + pontos);
      return false;
     }
    });
    
    setInterval(function()
    {if(tempo > -1)
     {
        $("#txtSegundos").text("Tempo Restante: " + tempo);
        tempo = tempo - 1;
     }
    },1000);
     
    setInterval(function()
    {if(tempo > -1)
     {
      var posX = Math.floor((Math.random()*85) +1);
      var posY = Math.floor((Math.random()*85) +1);
        
      $("#elemento").css("top",posY+"vh");
      $("#elemento").css("left",posX+"%");
     }
    },2000);
    
        /* button  Button */
    $(document).on("click", ".uib_w_1", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
