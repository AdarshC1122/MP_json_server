//importing json-server
const JSONserver=require('json-server')

//creating server using create()  method from json-server
const MPserver=JSONserver.create()

//Generating path/route to server resources
const router=JSONserver.router('db.json')

//initialising json-server middleware
const middleware=JSONserver.defaults()

//create PORT number for server
const PORT=3000 | process.env.PORT

//implemeting middelware to server
MPserver.use(middleware)

//implementinf rote to resource to server
MPserver.use(router)

//run command for server

MPserver.listen(PORT,()=>{
    console.log(`Server is running at.${PORT}`)
})