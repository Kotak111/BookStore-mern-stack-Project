import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import "C:/Users/HP/OneDrive/Desktop/red and white activity/Node_10/Bookstore_mvc/client/src/App.css"

const Update = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  async function show() {
      try {
        const res = await axios.get(`http://localhost:2000/api/book/${id}`);
        setData(res.user);
        console.log("res.data.user.....................")
        console.log(res.user)
        reset(res.data.user);
        console.log(res.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  }

  useEffect(() => {
      show();
  }, [id]);

  async function updatedata(changedata) {
      // const newdata = { ...data, ...changedata };
      console.log(changedata);

      try {
          const res = await axios.put(`http://localhost:2000/api/book/${id}`, changedata);
          console.log(res);
          toast.success("Data updated successfully");
          navigate("/");
      } catch (error) {
          console.error('Error updating data:', error);
          toast.error("Failed to update data");
      }
  }
  return (
   <>
     <div>
            <div className='container bg-light p-5 mt-5 shadow'>
            <h1 className='text-center add-blog'>Update Book</h1>
                <form method='post' onSubmit={handleSubmit(updatedata)}>
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
                    <button className="btn btn-warning" type="submit">Update</button>
                    <Toaster />
                </form>
            </div>
        </div>
   </>
  )
}

export default Update
