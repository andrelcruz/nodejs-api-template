const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
  foo: [
    {
      foo: String,
      bar: Boolean
    }
  ],
  bar: Date
})

module.exports = mongoose.model('Test', testSchema, 'test')
