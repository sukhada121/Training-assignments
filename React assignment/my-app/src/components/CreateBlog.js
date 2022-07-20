import { useState, useEffect } from "react"
import axios from 'axios';

const postURL = 'https://qghcujpqbvrdfszremfe.supabase.co/rest/v1/blogs'


const CreateBlog = () => {
   
  const [newBlog, setNewBlog]=useState(null)
  const [loading, setLoading]=useState(true)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
    reading_time:""
  })
 
  const handleSubmit = (e) => {
    const newData={...formData}
    newData[e.target.id]=e.target.value
    setFormData(newData)
    console.log(formData);
    

}
const subm=(e)=>{

  e.preventDefault();

  axios.post(postURL,formData,{
  
    headers:{
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnaGN1anBxYnZyZGZzenJlbWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgxMjk3NzcsImV4cCI6MTk3MzcwNTc3N30.LvOp9lASnuJAAwvg2VxFmnrVXuqZOM0KVngw8EKHQcM'
    }
}).then((response)=>{

    setNewBlog(response.data)
    setLoading(false)
    console.log('data',response)
});
}
  
  
   

    return <div className="container"><br /><h3>Add blog</h3>
    <form onSubmit={subm}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Blog title</label>
        <input onChange={(e) => handleSubmit(e)} value={formData.title} type="text" className="form-control" id="title" placeholder="Keep the title short and sweet">
      </input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea onChange={(e) => handleSubmit(e)}  value={formData.description} className="form-control" id="description" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Author name</label>
        <input onChange={(e) => handleSubmit(e)} value={formData.author} type="text" className="form-control" id="author">
      </input>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Reading time</label>
        <input onChange={(e) => handleSubmit(e)} value={formData.reading_time} type="text" className="form-control" id="reading_time">
      </input>
      </div>
      <button  type="submit" className="btn btn-info">Add blog</button>

      </form>
    </div>


}


export default CreateBlog;


