console.log("Is this my first node project?");

const myChalk = require('chalk');
const myHttp = require('http');
require('dotenv').config();


const myServer = myHttp.createServer((request, response) => {
    console.log(`Requested URL is: ${request.url}`);
    if(request.url === '/') {
        response.write('You requested localhost:3000 my friend!');
        response.end();
    } else if(request.url === '/ptwd102019') {
        response.write(`
            Kevin
            Vero
            Ashraf
            Jerlissa
        `);
        response.end();
    } else {
        response.write(`You are trying to access a page that does not exist!`);
        response.end();
    }
});

console.log(myChalk.blue("This text is blue! "));
console.log(myChalk.green("This text is green!"));

// myServer.listen(3000, () => console.log('I am running on port 3000!'));

myServer.listen(process.env.PORT, () => console.log('I am running on port 3000!'));
