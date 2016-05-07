var fs = require('fs');
var path = require('path');
var dirPath = '';
var exttensionName ='';
var callbackMethod;

var filterByExt = function (err,data){
	if(err) 
	{
		return callbackMethod(err)
	}
	var filteredList = [];
	for(i=0;i<data.length;i++)
	{
		var extType = path.extname(data[i]);
		if(extType.indexOf(exttensionName) > -1)
		{
			filteredList.push(data[i])
		}
	}
	
	return callbackMethod(null,filteredList);
}

module.exports.findFileNameByExtType = function(dir, ext, callback)
{
	dirPath = dir;
	exttensionName = ext;
	callbackMethod =callback;
	return fs.readdir(dir, filterByExt);
}
