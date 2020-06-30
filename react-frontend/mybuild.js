var ncp = require('ncp').ncp;
 
ncp.limit = 16;
source="./build/static"
destination="../api/static"
ncp(source, destination, function (err) {
 if (err) {
   return console.error(err);
 }
 console.log('done!');
});

ncp("./build/index.html","../api/templates")

