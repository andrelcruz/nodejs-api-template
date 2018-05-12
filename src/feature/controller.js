const AtividadesRealizadas = require('../model/exempleModel')
const mongoose = require('mongoose')

exports.getTest = async(req, res) => {
  const calculation = await testMethod(1, 2)

  let response = {
    sum: calculation
  }

  res.json(response)
}


function testMethod(foo, bar) {
  return foo + bar
}


