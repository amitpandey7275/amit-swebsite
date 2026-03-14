const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());


// MongoDB connection

mongoose.connect(
"mongodb+srv://amit:amit123@mywebsite.ifmvupf.mongodb.net/mywebsite?retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDB Atlas connected"))
.catch(err=>console.log(err));


// ================= USER SCHEMA =================

const UserSchema = new mongoose.Schema({

name:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
}

});

const User = mongoose.model("User",UserSchema);


// ================= PHOTO SCHEMA =================

const PhotoSchema = new mongoose.Schema({

image:String

});

const Photo = mongoose.model("Photo",PhotoSchema);



// ================= REGISTER API =================

app.post("/register", async(req,res)=>{

try{

const {name,email,password} = req.body;

const existingUser = await User.findOne({email});

if(existingUser){
return res.status(400).json({
message:"User already exists"
});
}

const user = new User({
name,
email,
password
});

await user.save();

res.json({
message:"User registered successfully"
});

}

catch(err){
res.status(500).json(err);
}

});



// ================= LOGIN API =================

app.post("/login", async(req,res)=>{

try{

const {email,password} = req.body;

const user = await User.findOne({email});

if(!user){
return res.status(404).json({
message:"User not found"
});
}

if(user.password !== password){
return res.status(400).json({
message:"Wrong password"
});
}

res.json({
message:"Login successful",
user:user
});

}

catch(err){
res.status(500).json(err);
}

});




// ================= MULTER CONFIG =================

const storage = multer.diskStorage({

destination:function(req,file,cb){
cb(null,"uploads/");
},

filename:function(req,file,cb){
cb(null, Date.now() + path.extname(file.originalname));
}

});

const upload = multer({storage:storage});



// ================= PHOTO UPLOAD API =================
app.post("/upload", upload.single("photo"), async(req,res)=>{

try{

const imagePath = "/uploads/" + req.file.filename;

const photo = new Photo({
image:imagePath
});

await photo.save();

res.json({
message:"Photo uploaded successfully",
image:imagePath
});

}
catch(err){
res.status(500).json(err);
}

});


// ================= GET ALL PHOTOS =================

app.get("/photos", async(req,res)=>{

try{

const photos = await Photo.find();

res.json(photos);

}
catch(err){
res.status(500).json(err);
}

});



// ================= STATIC FOLDER =================

app.use("/uploads", express.static("uploads"));



app.use(express.static(path.join(__dirname, "../website/build")));

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"../website/build/index.html"));
});

// ================= SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log("Server running");
});