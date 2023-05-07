import React, { useEffect, useState } from 'react'

function HomePage() {
    const [data,setData] = useState([]);
    console.log(localStorage.getItem('email'));
   function fetchData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setData(json);
      console.log(json);
  })
   }
   useEffect(()=>{
    fetchData();
   },[])

   let email = localStorage.getItem('email');
  return (
    <>
      <div>HomePage</div>
      <div>{email}</div>
      <table border={1}>
        <tr>
          <th>Name</th>
          <th>userName</th>
          <th>Email</th>
        </tr>
        {data.map((ele) => {
            return(

                <tr key={ele.id}>
            <td>{ele.name}</td>
            <td>{ele.username}</td>
            <td>{ele.email}</td>
          </tr>
            )
        })}
      </table>
    </>
  );
}

export default HomePage