const express = require('express')()

const PORT = 5678 

express.listen(PORT, () => console.log('Server started on', PORT ))