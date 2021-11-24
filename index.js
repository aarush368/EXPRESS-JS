const express =  require("express");
const path =  require("path");
const bodyParsar = require("body-parser");
const app = express();
const router = require("./router");

const port = 4000;

app.use(bodyParsar.urlencoded({extended: false}));
app.use(express.json())

app.get("/" ,(req,res) => {
   res.sendFile(path.join(__dirname +"/index.html"));
})

app.use("/api/v1", router);

app.get("/api/v1/userdata" , (req,res) => {
    
    res.json ({
        success : "successfully submited",
    });
});



app.listen(port , () => {
    console.log(`server is working on port : ${port}`);
})


