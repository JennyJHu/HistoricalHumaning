import React, { useState } from 'react';

const SubmitPage = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [sourceLink, setSourceLink] = useState('');

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here
    };

    return (
        <div className="submit-page">
            <h1>Submit a post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="text" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="sourceLink">Source Link:</label>
                    <input type="text" id="sourceLink" value={sourceLink} onChange={(e) => setSourceLink(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitPage;
