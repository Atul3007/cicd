const app=require("express")();

app.get("/",(req,res)=>{
    res.send("Welcome");
})


app.listen(8000,()=>{
    console.log("Live on 8000");
})