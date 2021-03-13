const moment = require('moment');

function timeInfo (){
return moment().format('h:mm a');
}
module.exports = timeInfo;
