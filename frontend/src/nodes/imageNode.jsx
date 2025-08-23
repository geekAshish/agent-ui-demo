import React, { useState } from 'react'
import { Node } from './Node'

const ImageNode = ({ id, data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  
  return (
      <Node 
          id={id}
          nodeType={"Image"}
          variableName={data?.id}
          handleCount={data.handleCount}
      >
          {selectedImage ? (
        <img 
          src={selectedImage} 
          alt="Selected" 
          className="w-full h-28 object-cover rounded-md border border-gray-300" 
        />
      ) : (
        <label className="w-full h-28 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
          <span className="text-xs text-gray-500">Click to select image</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            className="hidden"
          />
        </label>
      )}
    </Node>
  )
}

export default ImageNode
