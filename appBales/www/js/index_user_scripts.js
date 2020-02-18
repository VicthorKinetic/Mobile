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
    
    var nome = "";
    var idade = 0;
    var pontos = 0;
    var tempo = 60;
    var qual = Math.floor((Math.random()*20));
     
    var musicafundo = document.createElement('audio');
    musicafundo.setAttribute('src', 'jqm/audio/dfd_smb_medley.mp3');
    musicafundo.setAttribute('autoplay', 'autoplay');
     
    var audio = document.createElement('audio');
     
function PlayGame()
{
    $(document).on("click","#elemento",function(evt)
    {if(tempo > 0)
     {
        if(qual>7)
        {  
          pontos += 10; 
          $("#txtPontos").text("Pontos: " + pontos);
          audio.setAttribute('src', 'jqm/audio/wah.mp3');
          audio.setAttribute('autoplay', 'autoplay');
          $("#elemento").css("display", "none");
          return false;
        }
        else
        {
          pontos = 0; 
          $("#txtPontos").text("Pontos: " + pontos);
          audio.setAttribute('src', 'jqm/audio/Jump.wav');
          audio.setAttribute('autoplay', 'autoplay');
          $("#elemento").css("display", "none");
          return false;
        }
     }
    });
    
    setInterval(function()
    {if(tempo >= 0)
     {
        if(tempo === 0)
        {
            insert(nome,idade,pontos);
            select();
            $("#txtNomePlayer").text("Parabéns " + nome + "! Você acabou com: " + pontos + " pontos.");
            $("#txtPontos").text("");
            $("#txtSegundos").text(""); 
            tempo = -1;
            $("#elemento").css("display", "none");
        }
        else
        {
            $("#txtSegundos").text("Tempo: " + tempo);
            tempo = tempo - 1;
        }
     }
    },1000);
     
    setInterval(function()
    {if(tempo > 0)
     {
        var posX = Math.floor((Math.random()*85) +1);
        var posY = Math.floor((Math.random()*85) +1);
        
        $("#elemento").css("top",posY+"vh");
        $("#elemento").css("left",posX+"%");
        $("#elemento").css("display", "block");
        qual = Math.floor((Math.random()*20));
        if(qual<=7)
        {  
           $("#elemento").css("background-image", "url(jqm/images/mario.png)");
        }
        else
        {
            $("#elemento").css("background-image", "url(jqm/images/waluigi.png)");
        }
     }
    },2000);
}
    
        /* button  #btnIniciar */
    $(document).on("click", "#btnIniciar", function(evt)
    {
         /*global activate_subpage */
        
         nome = $("#txtNomeAlerta").val();
         idade = $("#txtIdadeAlerta").val();
        
         activate_subpage("#uib_jogo");
        
         $("#txtNomePlayer").text(nome + ", continue assim!");  
        
         new PlayGame();
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
