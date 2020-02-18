/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
        var nome = "";
        var email = "";
    
     /* button  Procurar */
    
    
        /* button  Procurar */
    
    
        /* button  Procurar */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Prucurar"); 
         return false;
    });
    
        /* button  Casa */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Casa"); 
         return false;
    });
    
        /* button  Info */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Infurmacao"); 
         return false;
    });
    
        /* listitem  Cadastro */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Cadastro"); 
         return false;
    });
    
        /* listitem  Listar */
    $(document).on("click", ".uib_w_13", function(evt)
    {
        alert(nome + " " + email);
        
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Remover */
    $(document).on("click", ".uib_w_14", function(evt)
    {
        alert("Dados Limpos.");
        
        nome = "";
        email = "";
        
        /* your code goes here */ 
         return false;
    });
    
        /* button  Gravar */
    $(document).on("click", ".uib_w_15", function(evt)
    {
        nome = $("#txtNome").val();
        email = $("#txtEmail").val();
        
        alert("Dados Gravados com sucesso.");
        
        $("#txtNome").val("");
        $("#txtEmail").val("");
        
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
