import axios from "axios";
import React, { useState, useEffect } from 'react';

const ReadMy = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const getData = async () => {
      setLoading(true);
      setError('');
      try {
         const response = await axios.get('https://64c8777fa1fe0128fbd5d3ef.mockapi.io/crud-alok');
         setData(response.data);
      } catch (error) {
         console.error("Error fetching data", error);
         setError('Error fetching data');
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <>
         {loading ? <div className='loading'></div>
            :
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
                  {data.map((item) => (
                     <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.userName}</td>
                        <td>{item.emailId}</td>
                        <td>
                           <button className="btn btn-success">Edit</button>
                        </td>
                        <td>
                           <button className="btn btn-danger">Delete</button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         }
      </>
   );
};

export default ReadMy;
