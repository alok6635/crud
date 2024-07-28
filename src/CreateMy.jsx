import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateMy = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErr('')
        if (!name || !email) {
            setErr('Please enter both name and email');
            return
        }
        try {
            const response = await axios.post('https://64c8777fa1fe0128fbd5d3ef.mockapi.io/crud-alok', {
                userName: name,
                emailId: email
            });
            console.log(response);
            navigate('/read');
        }
        catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <div className='wrapper'>
            <div className='container'>
                <h3>Create</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text"
                            className="form-control"
                            placeholder='Enter name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email"
                            className="form-control"
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {err && <p className='err'>{err}</p>}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};
export default CreateMy;
