'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

var toDoItemSchema = Schema( {
  userId: ObjectId,
  title: String,
  content:String,
  createdAt: Date,
} );

module.exports = mongoose.model( 'notes', toDoItemSchema );
