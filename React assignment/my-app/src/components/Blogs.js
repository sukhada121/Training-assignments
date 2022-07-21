import { useState, useEffect } from "react"
import axios from 'axios';
import blogpic from '../abs.jpg';


const baseURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs?select=*'

const Blogs = () => {
    const [blogs, setBlogs]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(()=> {
        axios.get(baseURL,{

            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
                'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
            }
        }).then((response)=>{

            setBlogs(response.data)
            setLoading(false)
            console.log('data',response)
        });
    },[])

    return ( 
        <div className="container">
            {
                loading? <h1>Loading...</h1>:
                <div className="row row-cols-1 row-cols-md-3 g-4">
             {
                blogs.map((blog,index)=>{
                return <div className="col">
                  <div className="card h-100">
                    <img src={blogpic} className="card-img-top" alt="..." width={'5 rem'}></img>
                    <div className="card-body">
                   
                      <h5 className="card-title">{index + 1}. {blog.title}</h5>
                      <p className="card-text" id="descr">{blog.description}</p>
                      <small>{blog.reading_time} mins read</small>
                    </div>
                  </div>
                </div>
               
                
             
        })
        
            }
             </div>
        
            }
            <br />
        </div>
    
    )
}


export default Blogs