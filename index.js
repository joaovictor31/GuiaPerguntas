const express = require ('express');
const app = express();

//Configurar EJS 
//Dizer para o express usar o EJS como view engine
app.set('view engine','ejs'); 


app.get('/',function(req,res){
    var nome = 'João Victor';
    var curso = 'Sistemas de Informação'
   res.render("index",{
    nome: nome,
    curso: curso,
    idade: 25
   })
})

app.get('/login', function(req,res){
    res.send('Esse é o seu perfil')
})

app.listen(8080, function(){
    console.log('Servidor Iniciado')
})