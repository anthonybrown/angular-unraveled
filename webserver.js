var connect = require('connect');
var serverStatic = require('serve-static');

var app = connect();
app.use(serverStatic('./Work/UnravelNg'));
app.listen(5010);
