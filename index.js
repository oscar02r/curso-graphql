'use strict'

const {graphql, buildSchema} = require('graphql')

//Definiendo schema
const schema = buildSchema(`
  type Query {
      hello:String
  }
`)

graphql(schema, '{hello}').then(console.log)