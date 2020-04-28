const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Poi = new Schema({
 title:{
   type:String
 },
 music:{
   type:String
 },
 Picture:{
   type:String
 },
 blog:{
   type:String
 },
 username:{
   type:String
 },
 type:{
   type:String
 },
 module:{
   type:String
 }
})

module.exports =  mongoose.model('Poi',Poi)
