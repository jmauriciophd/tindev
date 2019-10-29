const {Schema,model} = require('mongoose');
const DevSchema = new Schema({
 name:{
     type:String,
     required:true,
 },
 user:{
     type:String,
     require:true,
 },
 bio:String,
 avatar:{
     type:String,
     required:true,
 },
 likes:[{
    type:Schema.Types.ObjectId,
    ref:'Dev',
 }],
 deslikes:[{
    type:Schema.Types.ObjectId,
    ref:'Dev',
 }],
},{timestamps:true, //creatAt,updateAt
});
module.exports = model('Dev',DevSchema);