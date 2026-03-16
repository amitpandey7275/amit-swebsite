import React,{useState} from "react";
import axios from "axios";

function Upload(){

const [image,setImage] = useState(null);

const handleUpload = async(e)=>{
e.preventDefault();

const formData = new FormData();
formData.append("photo",image);   // ⚠️ yaha change

await axios.post("http://localhost:5000/upload",formData);

alert("Image uploaded");
}

return(

<div>

<h2>Upload Photo</h2>

<form onSubmit={handleUpload}>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button type="submit">Upload</button>

</form>

</div>

)

}

export default Upload;