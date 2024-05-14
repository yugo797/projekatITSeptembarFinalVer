
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const ArtworkManager = () => {
    const [formData, setFormData] = useState({
        name: '',
        author: '',
        period: '',
        picsURLS: '',
        featured: false,
        description: '',
    });

    const [currentID, setCurrentID] = useState("");

    const handleInputChange = () => {

    }

    const handleURLS = () => {

    }

    const handleFeatured = () => {

    }

    const handleUpdateWork = () => {

    }

    return (
        <>
        <h3>update artwork</h3>

            <input
                type="text"
                name="id"
                onChange={e=>setCurrentID(e.target.value)}
            />

            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="period"
                value={formData.period}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="urls"
                value={formData.picsURLS}
                onChange={handleURLS}
            />
            <input
                type="radio"
                name="featured"
                onChange={handleFeatured}
            />
            <input
                type="text"
                name="desc"
                value={formData.description}
                onChange={handleInputChange}
            />
            <button onClick={handleUpdateWork}>Update</button>
        </>
    )
}

export default ArtworkManager;