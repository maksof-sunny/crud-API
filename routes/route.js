const { Router } = require('express');
module.exports= (app)=>{
    const info = require('../controllers/controller');

    app.get('/api/info', info.allData);
    app.get('/api/info/:id', info.findById);
    app.post('/api/create', info.insertData);
    app.patch('/api/update/:id', info.updateData);
    app.delete('/api/delete/:id', info.deleteData);
}