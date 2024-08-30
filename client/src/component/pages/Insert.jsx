import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import "C:/Users/HP/OneDrive/Desktop/red and white activity/Node_10/Bookstore_mvc/client/src/App.css"
import { Link } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import {useNavigate} from "react-router-dom"

const Insert = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate=useNavigate();
  const submitData = async (data) => {
    try {
      const res = await axios.post(`http://localhost:2000/api/book/data`, data)
      console.log(res.data);
    console.log(data);
    
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/")
        
      } else {
        toast.error(res.data.message);
        
      }
    } catch (error) {
      console.error('There was an error!', error);
      toast.error('An error occurred while submitting data.');
    }
  }
  return (
   <>
   <div>
      <div className='container bg-light p-5 mt-5 shadow'>
        <h1 className=' text-center add-blog '>Add Book</h1>
        <form method='post' onSubmit={handleSubmit(submitData)}>
          <div className="mb-3">
            <label htmlFor="book_name" className="form-label">Book Name :</label>
            <input
              type="text"
              className="form-control"
              {...register("name", { required: "Book name is required" })}
              placeholder="Enter book name"
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="book_codeNumber" className="form-label">Book Author :</label>
            <input
              type="text"
              className="form-control"
              {...register("author", { required: "Book Author is required" })}
              placeholder="Enter Author Name"
            />
            {errors.author && <p className="text-danger">{errors.author.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="book_auther" className="form-label">Establish :</label>
            <input
              type="number"
              className="form-control"
              {...register("establish", { required: "Establish is required" })}
              placeholder="Enter establish"
            />
            {errors.establish && <p className="text-danger">{errors.establish.message}</p>}
          </div>
          <div className="mb-3">
          <label htmlFor="book_reting" className="form-label">Rating :</label>
          <textarea name="" id="" {...register("description",{required:"description is required"})} placeholder='Enter Description' className='form-control'></textarea>
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
          </div>
         
          <button className="btn btn-primary" type="submit">Submit</button>
          <Link className="btn btn-danger ms-2" to="/">View Blog</Link>
          
        </form>
      </div>
    </div>
   </>
  )
}

export default Insert
