var db = openDatabase("DadosWHAAAAAA", '1.0', "Minha base de dados", 2 * 1024 * 1024);
 
var create = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS usuario (id integer primary key, nome text, idade text, pontos integer)");
    });
}
 
var insert = function(nome, idade, pontos) {
    db.transaction(function (tx) {
        tx.executeSql("INSERT INTO usuario (nome, idade, pontos) VALUES (?,?,?)", [nome, idade, pontos]);
    });
}

var select = function() {
    db.transaction(function (tx) {    
        tx.executeSql("SELECT nome, idade, pontos FROM usuario", [], function(tx, resposta) {
            if(resposta.rows.length > 0) {
                var info="";
                for(var i = 0; i < resposta.rows.length; i++) {
                    info = ("-> " + resposta.rows.item(i).nome + " " + resposta.rows.item(i).idade+ " " + resposta.rows.item(i).pontos); console.log (info);
                }
            }
        });
    });
}
