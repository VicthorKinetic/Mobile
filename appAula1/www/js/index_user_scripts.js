/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {   
        /* button  #btnSoma */
    $(document).on("click", "#btnSoma", function(evt)
    {
        
        var Num1 = $("#txtNum1").val();
        
        var Num2 = $("#txtNum2").val();
        
        var Resu = parseInt(Num1) + parseInt(Num2);
        
        alert(Num1 + " + " + Num2 + " = " + Resu);
        
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnSubtracao */
    $(document).on("click", "#btnSubtracao", function(evt)
    {
        var Num1 = $("#txtNum1").val();
        
        var Num2 = $("#txtNum2").val();
        
        var Resu = parseInt(Num1) - parseInt(Num2);
        
        if(Resu <0)
            {
                alert("Aviso, número negativo: " + Num1 + " - " + Num2 + " = " + Resu);
            }
        else
            {
                alert(Num1 + " - " + Num2 + " = " + Resu);
            }
        
        
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnMultiplicacao */
    $(document).on("click", "#btnMultiplicacao", function(evt)
    {
        var Num1 = $("#txtNum1").val();
        
        var Num2 = $("#txtNum2").val();
        
        var Resu = parseFloat(Num1) * parseFloat(Num2);
        
        alert(Num1 + " * " + Num2 + " = " + Resu);
        
        
        /* your code goes here */ 
         return false;
    });
    
        /* button  #btnDivisao */
    $(document).on("click", "#btnDivisao", function(evt)
    {
        var Num1 = $("#txtNum1").val();
        
        var Num2 = $("#txtNum2").val();
        
        var Resu = parseFloat(Num1) / parseFloat(Num2);
        
        alert(Num1 + " / " + Num2 + " = " + Resu);
        
        
        /* your code goes here */ 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
