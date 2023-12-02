const express = require('express');
const router = express.Router();
var db = require('./db.js');


router.route('/paciente').post((req, res) => {

    var paciente = req.body.paciente;

    var sql = "SELECT * FROM prontuario WHERE paciente=?";

    if (paciente != "" ) {
        db.query(sql, [paciente], function (e, data, fields) {
            if (e) {
                res.send(JSON.stringify({ success: false, message: e }));

            } else {
                if (data.length > 0) {
                    res.send(JSON.stringify({ success: true, user: data }));
                } else {
                    res.send(JSON.stringify({ success: false, message: 'Empty Data' }));
                }
            }
        });
    } else {
        res.send(JSON.stringify({ success: false, message: 'Fill in the field!' }));
    }

});

module.exports = router;