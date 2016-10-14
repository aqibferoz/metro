var express=require('express');
var router=express.Router();
User=require('../models/user.js');
// invoices=require('../models/invoice.js');

router.get('/',function(req,res){
User.getUser(function(err,user){
	if(err){
		res.send(err);
}
res.json(user);
	});
});

router.get('/:id',function(req,res){
User.getUserById(req.params.id,function(err,user){
	if(err){
		res.send(err);
}
res.json(user);
	});

});

	router.post('/',function(req,res){
		var user=req.body;
		User.addUser(user,function(err,user){
			if(err){
				res.send(err);
			}
			res.json(user);
		});
	});
	

	//update user
router.put('/:id', function(req,res){
	var id = req.params.id;
	var user = req.body;
	User.updateUser(id, user, {}, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	});
});


//delete user
router.delete('/:id', function(req,res){
	var id = req.params.id;
	var user=req.body;
	User.removeUser(id, user, {}, function(err, user){
		if(err){
			res.send(err);
		}
		res.json(user);
	});
	});
	module.exports= router;
