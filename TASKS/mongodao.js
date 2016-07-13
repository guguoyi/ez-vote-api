var mongo=require("mongodb"); 
var host="localhost"; 
var port=27017;

function addChoices(choices) {
 
    //mongodb get the connection form the pool. Server function support the connection pool.
    var server=new mongo.Server(host,port,{auto_reconnect:true}); 

    var db=new mongo.Db("db", server, {safe:true});

    db.open(function (err, db) {

        if(err) {
	        throw err; 
        } else { 
	        console.log("成功建立数据库连接"); 

			db.collection("choice_list", function (err, collection) {

	            collection.insert(choices, function(err, docs) {
	            	console.log(docs);
	            });
	        });

			db.close(); 
		} 
	}); 
}


function getChoices(res) {
	var server=new mongo.Server(host,port,{auto_reconnect:true}); 
    
    var db=new mongo.Db("db", server, {safe:true});

    var results = null;

    db.open(function (err, db) {

        if(err) {
	        throw err; 
        } else { 
	        console.log("成功建立数据库连接"); 

			db.collection("choice_list", function (err, collection) {

		        collection.find({}).toArray(function(err, docs) {

	                 if(err) {
	                 	throw  err;
	                 } else{
	                 	 console.log(docs);		                 	 
	                     res.writeHead(200, {"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});//可以解决跨域的请求
                         res.write(JSON.stringify(docs));
                         res.end();
                         db.close();
	                 }
	            });
	        });
		} 
	}); 
}

exports.addChoices = addChoices;
exports.getChoices = getChoices;