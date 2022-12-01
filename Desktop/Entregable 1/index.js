const http = require('http');
const path = require('path');
const fs = require('fs/promises');

const PORT = 8000;

const app = http.createServer(async (request, response) => {
  const requestMethod = request.method;
  const requestURL = request.url;
  if(requestURL === "/api/v1/tasks") {
    const jsonPath = path.resolve('./data.json');
    const jsonFile = await fs.readFile(jsonPath, 'utf8');

    const getLastId = (dataArray) => {
      const lastElement = dataArray.length - 1;
      return dataArray[lastElement].id + 1;
    }

    if(requestMethod === 'GET') {
      response.setHeader("Content-Type", "application/json")
      response.writeHead(200);
      response.write(jsonFile);
    }
    
    if(requestMethod === "POST"){
        response.writeHead(201);
        request.on("data", async (data) => {
          const parsed = JSON.parse(data);
          const arr = JSON.parse(jsonFile);
          arr.push({...parsed, id: getLastId(arr)});
          console.log(getLastId(jsonFile))
          await fs.writeFile(jsonPath, JSON.stringify(arr));
        });
        response.end()
    }

    if(requestMethod === "PUT"){
        response.writeHead(202);
        request.on("data", async (data) => {
          const parsed = JSON.parse(data);
          const arr = JSON.parse(jsonFile);
          const {id, status} = parsed;
          const taskIndex = arr.findIndex((task) => task.id === id);
          arr[taskIndex].status = status;
          await fs.writeFile(jsonPath, JSON.stringify(arr));
        });
        response.end();
    }

    if(requestMethod === "DELETE"){
      response.writeHead(301);
      request.on("data", async (data) => {
        const parsed = JSON.parse(data);
        const arr = JSON.parse(jsonFile);
        const {id} = parsed;
        const fiterIndex = arr.filter((task) => task.id != id);
        await fs.writeFile(jsonPath, JSON.stringify(fiterIndex));
      });
      response.end();
  }
  } else {
    response.writeHead(503);
  }

  response.end();
});

app.listen(PORT);

console.log('running server')