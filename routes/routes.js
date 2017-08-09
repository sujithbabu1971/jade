// Outside world refers this as loginPageHandler though the function name is loginPage
module.exports.loginPageHandler = function loginPage(req,res)
{

	req.session.destroy();
	console.log("home page");
	res.render("login.jade", {});
	
}

module.exports.landingPageHandler = function landingPage(req,res)
{
	var person = req.query.userName;
	if(req.session.userName)
	{
		person = req.session.userName;
	}
	else
	{
		person = req.query.userName;
		req.session.userName=person;

	}
	res.render("landingpage.jade", {"userName":person});
}



// Outside world refers this as cityFn though the function name is cityInternalFn
module.exports.cityPageHandler = function cityInternalFn(req,res)
{
	var interest = req.body.interest;
	var headLineValue;
	var cityName;
	var person = req.session.userName;
	if(interest==="finance")
	{
		cityName = "New York";
		headLineValue=cityName+ " is the city of queen";
	}
	else if (interest==="fashion")
	{
		cityName = "Paris";
		headLineValue=cityName+ " is the fashion capital  of the world";
	}
	else if (interest==="politics")
	{
		cityName = "Havana";
		headLineValue=cityName+ " is the political capital of the world";
	}
	else if (interest==="history")
	{
		cityName = "New York";
		headLineValue=cityName+ " is the historical capital  of the world";
	}
	else if (interest==="conservatism")
	{
		cityName = "London";
		headLineValue=cityName+ " is the capital  of the conservatives";
	}
	res.render("citypage.jade", {"cityName": cityName,
	"headLine":headLineValue, "person":person});
}

