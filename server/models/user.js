var mongoose=require('mongoose');
// Profile schema
var UserSchema=mongoose.Schema({
	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	Email:{
		type:String,
	
	},
	Sex:{
		type:String,
		required:true
	},
	Age:{
		type:String,
	},
	Date_Birth:{
		type:String,
		
	},
	Description:{
		type:String,
		
	},
	Cast:{
		type:String,
	},
	Occupation:
	{
		type:String,
	},
	Location:{
		type:String,
	},
	Education:{
		type:String,
	}
	
});		
var User=module.exports=mongoose.model('User',UserSchema);



module.exports.getUser=function(callback,limit){

	User.find(callback).limit(limit).sort([['first_name','ascending']]);
}

module.exports.getUserById=function(id,callback){

	User.findById(id,callback);
}

module.exports.addUser=function(user,callback){
	var add={
		first_name:user.first_name,
		last_name:user.last_name,
		Email:user.Email,
		Sex:user.Sex,
		Age:user.Age,
		Date_Birth:user.Date_Birth,
		Description:user.Description,
		Cast:user.Cast,
        Occupation:user.Occupation,
        Location:user.Location,
        Education:user.Education
		
	}
	User.create(add,callback);
}
module.exports.updateUser=function(id,user,options,callback){
	var query={_id: id};
	var update={
		first_name:user.first_name,
		last_name:user.last_name,
		Email:user.Email,
		Sex:user.Sex,
		Age:user.Age,
		Date_Birth:user.Date_Birth,
		Cast:user.Cast,
        Occupation:user.Occupation,
        Location:user.Location,
        Education:user.Education
	}
	User.findOneAndUpdate(query,update,options,callback);
	}


module.exports.removeUser = function(id, callback){
var query = {_id: id};
User.remove(query, callback);
}