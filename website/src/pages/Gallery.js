import React,{useEffect,useState} from "react";
import axios from "axios";
import "./Gallery.css";

function Gallery(){

const [photos,setPhotos] = useState([]);

useEffect(()=>{

axios.get("https://your-backend.onrender.com/photos")
.then(res=>{
setPhotos(res.data);
})
.catch(err=>{
console.log("Error fetching photos:",err);
});

},[]);

return(

<div className="gallery-container">

<h2>Gallery</h2>

{photos.length === 0 ? (

<p>No photos uploaded yet</p>

) : (

<div className="gallery-grid">

{photos.map((photo)=>(

<img
key={photo._id}
src={photo.image}
alt="uploaded"
/>

))}

</div>

)}

</div>

);

}

export default Gallery;