// import React from 'react'

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {
  const [user, setUser] = useState([]);
    async function show() {
        try {
            const res = await axios.get('http://localhost:2000/api/book');
            setUser(res.data.user);
        } catch (error) {
          alert("error")
            console.error('Error fetching data:', error);
        } 
    }

    function trash(id) {
        if (confirm("are you sure want to delete this items")) {
            axios.delete(`http://localhost:2000/api/book/${id}`)
                .then(() => {
                    show();

                })

        }
    }


    useEffect(() => {
        show();
    }, []);
  return (
   <>
  <Link className="btn btn-warning mt-5" to="/insert">Add More Book</Link>
     <div className="container">

{
     user.length > 0 ?
     (
        <table className='table table-striped table-hover table-bordered text-center mt-5  w-100 '>
        <thead >
            <th>id</th>
            <th>Book_name</th>
            <th>Book_author</th>
            <th>Book_establish</th>
            <th>Book_description</th>
            <th>Action</th>
        </thead>
        <tbody>
            {
                user?.length > 0 ? (
                  user?.map((items,index)=>(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{items.name}</td>
                                <td>{items.author}</td>
                                <td>{items.establish}</td>
                                <td>{items.description}</td>
                               <td>
                               <button className="btn btn-danger" onClick={() => trash(items._id)}>delete</button>
                               {/* <Link to={`/showuser/${items.id}`} className='btn btn-success ms-2'>ShowUser</Link> */}
                               <Link to={`/update/${items._id}`} className='btn btn-success ms-2'>UpdateUser</Link>
                               </td>
                            </tr>
                        ))
             ) : 
             (
                <th colSpan={5} className='text-center bg-primary'>hello</th>
             )
            }
        </tbody>

    </table>

    )
    :
    (
        <div className="text-center">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
    </div>
    )
}
</div>
   <Toaster />
   </>
  )
}

export default Home
