import Blogs from '../src/components/Blogs';
import CreateBlog from '../src/components/CreateBlog';


function App() {
  return (
    <div className="App">
    <div className="container">
      <h1>Blog App using React</h1><br />
     
     <CreateBlog />
     <br />
     <h2>Blog List</h2>
     </div>
     <Blogs />
     
     
      
    </div>
  );
}

export default App;
