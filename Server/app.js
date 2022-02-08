const express = require("express");
const cors = require("cors");

const { conection } = require("./conection");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/add", (req, res) => {
    const { model, brand } = req.body;
    const sql = `INSERT INTO cars (brand, model) VALUES('${brand}', '${model}')`;
    conection.query(sql, (err, results) => {
        if(results) console.log("Inserido");
    })
});

app.get("/car", (req, res) => {
    const sql = "SELECT * FROM cars ORDER BY id DESC";
    conection.query(sql, (err, results) => {
        res.send(results);
    })
});

app.put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { newModel, newBrand } = req.body;
    const sql = `UPDATE cars SET brand = '${newBrand}', model = '${newModel}' WHERE id = '${id}'`;
    conection.query(sql, (err, results) => {
        if(results) console.log("Update");
    })
})

app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM cars WHERE id = '${id}'`;
    conection.query(sql, (err, results) => {
        if(results) console.log("Deletado");
    })
})

app.listen(8080);