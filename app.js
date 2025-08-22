const express = require('express');
const app = express();

app.get('/', (req, res) => { 
 res.send('Hello World from GitHub using Node.js! 跳跴践跶跷跸跹跺跻脥�');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { 
 console.log(`App listening on port ${PORT}`);
});
