const {readFileSync}=require('fs');
var load = () => JSON.parse(readFileSync('tt.json'))
module.exports={load};