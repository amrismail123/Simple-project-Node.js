const fs = require('fs')

const addPerson =(fname , lname , age,id,city)=>{
    const allData= loadInfo()

    const duplicatedData = allData.filter ((obj) => {
        return obj.id === id
     } )
     if (duplicatedData.length == 0 ) {
    
     allData.push ({
        id : id,
        fname : fname ,
        lname : lname , 
        age : age ,
        city : city
     })

     saveallData (allData)

    } else {
        console.log("ERROR DUPLICATED DATA")
    }
}
///////////////////////////////////////////////////////////////////////
const loadInfo=()=>{
    try {
     const dataJson = fs.readFileSync("data5.json").toString()
     return JSON.parse (dataJson)
    } catch{
        return[]
    }
}
//////////////////////////////////////////////////////////////////////
const saveallData =(allData)=>{
    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data5.json", saveallDataJson)
}
//////////////////////////////////////////////////////////////////////
//delete data
const deletedData=(id)=>{
    const allData=loadInfo()
    
    const dataToKeep= allData.filter((obj)=>{
        return obj.id !==id
    })
    saveallData(dataToKeep)
    console.log("You have successfuly deleted the item")
    console.log(dataToKeep)
}
//////////////////////////////////////////////////////////////////////
//read data
const readData=(id)=>{
    const allData =loadInfo()
    const itemNeeded = allData.find((obj)=>{
        return obj.id==id
    })
    console.log(itemNeeded)
}
//////////////////////////////////////////////////////////////////////
//listData
const listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj)=>{
        console.log(obj.fname ,  obj.age , obj.city)
    })
}
/////////////////////////////////////////////////////////////////////
module.exports={
    addPerson,
    deletedData,
    readData,
    listData
}