const router = require("express").Router();

router.get("/" ,(req, res) => {
    res.send("seja bem vindo!");
})

module.exports = router;