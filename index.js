const Hapi = require("hapi");

const server = new Hapi.Server({
});

server.connection({
    port:3000
});



server.register(require("inert"), (err)=>{
    if(err)
        throw err;


    server.route({
        method:"GET",
        path:"/{param*}",
        handler:{
            directory:{
                path:__dirname,
                listing:true
            }
        }
    });
});

server.start((err) => {
    if(err)
        console.error("Error Starting Server");
    else
        console.log("Server Started");
});