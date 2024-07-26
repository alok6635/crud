import axios from "axios";
import React, { useState, useEffect } from 'react';

const Read = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   function getData() {
      axios.get('https://64c8777fa1fe0128fbd5d3ef.mockapi.io/crud-alok').then((res) => {
         console.log(res.data);
         setData(res.data);
      });
   }

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
                              <button className="btn btn-success">Edit</button>
                           </td>
                           <td>
                              <button className="btn btn-danger">Delete</button>
                           </td>
                        </tr>
                     );
                  })
               }
            </tbody>
         </table>
      </>
   )
}

export default Read;
