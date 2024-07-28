import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, userName, emailId } = location.state || {};
  const [name, setName] = useState(userName || '');
  const [email, setEmail] = useState(emailId || '');

  useEffect(() => {
    if (location.state) {
      setName(userName);
      setEmail(emailId);
    }
  }, [location.state, userName, emailId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://66a5163d5dc27a3c190a9d6e.mockapi.io/crud-alok/${id}`, {
      userName: name,
      emailId: email,
    })
      .then(() => {
        navigate('/read');
      })
      .catch((error) => {
        console.error("Error updating data: ", error);
      });
  };

  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <h3>Update</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text"
                className="form-control"
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
