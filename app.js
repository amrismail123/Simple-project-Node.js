const fs = require ('fs')
const yargs = require('yargs')
const data5 = require('./data5')


yargs.command({
   command: "add",
   describe : "to add an item",
   builder :{
       fname :{
           describe : "this is the first name in add comman",
           demandOption: true,
           type : "string",
       },
       lanme :{
           describe:"this is the last name in add comman",
           type :"string"
       }
   },
   handler :(x)=>{
   data5.addPerson(x.fname, x.lname, x.age ,x.id,x.city)
   }
})
yargs.parse()
////////////////////////////////////////////////////////////////////////////
yargs.command({
   command: "delete",
   describe : "to deleted an item",
   handler :(x)=>{
      data5.deletedData(x.id)
   }
})
console.log(yargs.argv)
////////////////////////////////////////////////////////////////////////////
yargs.command({
   command: "read",
   describe : "to read data",
   builder :{
       id:{
           describe:"this is id desc in read command",
           demandOption:true,
           type : "string"
       }
   },
   handler :(x)=>{
      data5.readData(x.id)
   }
})
console.log(yargs.argv)
////////////////////////////////////////////////////////////////////////////
yargs.command({
   command: "list",
   describe : "to list data",
   handler :()=>{
      data5.listData()
   }
})
console.log(yargs.argv)

