const { Router } = require('express');
const router = Router();


//routers  se manda un mensade de hola cuando se carga la pag
router.get('/test',(req, res)=> {
    const data = {
        "name": "la pag web bergas",
        "website": "faztweb.com" 
    };
    res.json(data);
});

module.exports = router;