var db = openDatabase("ximbola", '1.0', "Minha base de dados", 2 * 1024 * 1024);
 
var create = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome text, email text)");
    });
}
 
var insert = function(nome, email) {
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO usuario (nome, email) VALUES (?,?)", [nome, email]);
    });
}
 
var select = function() {
    db.transaction(function (tx) {    
        tx.executeSql("SELECT nome, email FROM usuario", [], function(tx, resposta) {
            if(resposta.rows.length > 0) {
                var info="";
                for(var i = 0; i < resposta.rows.length; i++) {
                    info = ("-> " + resposta.rows.item(i).nome + " " + resposta.rows.item(i).email); console.log (info);
                }
            }
        });
    });
}