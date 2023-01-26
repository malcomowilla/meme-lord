import React, { useState } from 'react';
import React from "react";
import Header from './Header'

function UpdateMeme() {
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [id,setId]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new form data object
    const formData = new FormData();
    // append the category and image to the form data
    formData.append('category', category);
    formData.append('image', image);

    // make the API call to update the meme
    fetch(`https://api.imgflip.com/get_memes${id}`, {
      method: 'PATCH',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        //handle the response
      })
      .catch(error => {
        console.error(error);
        // handle the error
      });
  };

  return (
    <div>
        <Header />
    
    <form  className="card h-100 w-20 " onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </label>
      <br />
      <label className="mb-3">
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="funny">Funny</option>
          <option value="political">relationship</option>
          <option value="animals">Animals</option>
        </select>
      </label>
      <br />
      <label for="insert image" className="form-label">
        Image:
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      </label>
      <br />
      <button  className="btn btn-dark" type="submit">Update Meme</button>
    </form>
    </div>
  );
}

export default UpdateMeme;
