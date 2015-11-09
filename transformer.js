var fs = require("fs");
var toCamel = function(s)
{
  var str = s[0];
  for(var i = 1; i < s.length; i ++)
  {
    str += s[i].toLowerCase();
  }
  return str;
}

fs.readFile('./input.txt','utf-8',function(err,text)
{
  var result ="";
  var splitted;
  splitted = text.split(/\r\n|\r|\n/);
	for (var i = 0; i < splitted.length; i++) {
    if(splitted[i].indexOf(":")==-1)continue;
		var keyValue = splitted[i].split(/:/);
    var value = keyValue[1];
    var keys = keyValue[0].split(/_/);
    var key="";
    for(var j = 0;j < keys.length; j++)
    {
      key += toCamel(keys[j]);
    }
    if(i!=0)
    {
      result += ',\n';
    }
    result += (key + " = "+value);
	}
  fs.writeFile('./output.txt',result,function(err){});
});
