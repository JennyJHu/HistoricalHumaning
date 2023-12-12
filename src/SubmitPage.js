import React, { useState } from 'react';

const SubmitPage = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
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
        <>
            <header>
                {/* <h1> <a className="title" href="./" target="_self"> Historical Humaning</a> </h1> */}

                <p className="about"> <a className="title" href="./" target="_self"> Historical Humaning Archive</a> is an ongoing collection of humans being historically human. </p>
            </header>
            <div className="submit-page">
                <h1>Submit a post</h1>
                <form className='submit-categories' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input type="file" id="image" onChange={handleImageChange} />
                    </div>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
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
        </>
    );
};

export default SubmitPage;
