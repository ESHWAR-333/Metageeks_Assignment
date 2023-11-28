const express = require('express');
const app = express();
const port = 5000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
  