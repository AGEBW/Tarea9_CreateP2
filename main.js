var mongoose = require('mongoose');
var schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/test');
    
var Blogs=mongoose.model('Blogs',schema,'blogs');

var blogs= new Blogs({
   title:'Rosenrot',
   author:'AGE',
   body:'Descubrimientos tardados de instalacion',
   comments:'la regue cañon',
   date:Date.now,
   hidden: false,
   meta: 91
  
});

blogs.save(function(error){
    if(error){
    console.log(error);
    process.exit(1);
    }
    console.log("Saved!!");
    process.exit(0)
    });