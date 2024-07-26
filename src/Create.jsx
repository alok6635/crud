import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr('');
        if (!name || !email) {
            setLoading(false);
            setErr('Please enter both name and email');
            return;
        }
        if (!validateName(name)) {
            setLoading(false);
            setErr('Name should only contain alphabetic characters');
            return;
        }
        if (!validateEmail(email)) {
            setLoading(false);
            setErr('Please enter a valid email address');
            return;
        }
        try {
            const response = await axios.post('https://64c8777fa1fe0128fbd5d3ef.mockapi.io/crud-alok', {
                userName: name,
                emailId: email
            });
            console.log(response);
            navigate('/read');
        } catch (error) {
            setLoading(false);
            console.log("Error", error);
        } finally {
            setLoading(false);
        }
    };

    const validateName = (name) => /^[A-Za-z]+$/.test(name);
    const validateEmail = (email) => email.includes('@');
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
                            onChange={(e) => setName(e.target.value)} onBlur={() => validateName(name)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email"
                            className="form-control"
                            placeholder='Enter email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => (validateEmail(email))} />
                    </div>
                    {err && <div className="alert alert-danger">{err}</div>}
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Sending...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
