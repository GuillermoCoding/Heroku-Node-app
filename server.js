const express = require('express');

const app = express();

app.get('/',(req,res)=>{
	res.send("Hello World");
});

const port = process.env.PORT || 4000;
app.listen(port,function(){
	console.log("listening on port "+port+" ...");
});
