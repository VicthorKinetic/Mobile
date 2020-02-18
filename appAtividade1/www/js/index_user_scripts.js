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
     var senha = "";
     var religiao = "";
     var sexo = "";
     var idade = "";
     
     /* listitem  Cadastro */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Listitem */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* listitem  Listitem */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnHome */
    $(document).on("click", "#btnHome", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_44_19"); 
        
         nome = "";
         idade = "";
         religiao = "";
         sexo = "";
         senha = "";
        
         return false;
    });
    
        /* button  #btnRegister */
    $(document).on("click", "#btnRegister", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_cadastro"); 
         return false;
    });
    
        /* button  #btnView */
    $(document).on("click", "#btnView", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_exibir"); 
         return false;
    });
    
        /* button  #btnDevelopers */
    $(document).on("click", "#btnDevelopers", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#uib_desenvolvedores"); 
         return false;
    });
    
        /* button  #btnSalvar */
    $(document).on("click", "#btnSalvar", function(evt)
    {
        /* your code goes here */ 
        
        nome = $("#txtNome").val();
        senha = $("#txtSenha").val();
        religiao = $("#txtReligiao").val();
        sexo = $("#txtSexo").val();
        idade = $("#txtIdade").val();
        
        if((nome == "") || (senha == "") || (religiao == "") || (sexo == "") || (idade == ""))
            {
                alert ("Por Favor preencher todos os campos.");
            }
         return false;
    });
    
        /* button  #btnExibir */
    $(document).on("click", "#btnExibir", function(evt)
    {
        /* your code goes here */ 
        
        $("#resposta").html(nome + " " + idade + " " + sexo + " " + religiao + " " + senha);
        
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
