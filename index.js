const express = require ('express');
const app = express();

//Configurar EJS 
//Dizer para o express usar o EJS como view engine
app.set('view engine','ejs'); 


app.get('/:idade',function(req,res){ //Neste caso será obrigatório passar a idade
    var nome = 'João Victor';
    var curso = 'Sistemas de Informação';
    var idade = req.params.idade;
   res.render("index",{
    nome: nome,
    curso: curso,
    idade: idade
   })
})

app.get('/login', function(req,res){
    res.send('Esse é o seu perfil')
})

app.listen(8080, function(){
    console.log('Servidor Iniciado')
})