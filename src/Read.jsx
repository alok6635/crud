import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://66a5163d5dc27a3c190a9d6e.mockapi.io/crud-alok')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const handleDel = (id) => {
    axios.delete(`https://66a5163d5dc27a3c190a9d6e.mockapi.io/crud-alok/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  };

  const handleEdit = (item) => {
    navigate('/update', { state: item });
  };

  
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.userName}</td>
                  <td>{item.emailId}</td>
                  <td>
                    <button className="btn btn-success" onClick={() => handleEdit(item)}>Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDel(item.id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Read;
