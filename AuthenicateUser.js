
user = [{name:"user1",pass:"user1"},{name:"user2",pass:"user2"},{name:"user3",pass:"user3"}];


exports.authenicate=function(uname,pass)
//function authenicate(uname,pass)
{
	for(var i=0;i<user.length;i++)
	{
		if(uname == user[i].name && pass == user[i].pass)
		{
			return true;
		}
	}
	return false;
}

//exports.auth=authenicate;