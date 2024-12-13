```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/:id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout(){
  return (
    <div>
      {/* your layout goes here */}
      <Outlet/>
    </div>
  )
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function User() {
  let {id} = useParams();
  return <h1>User {id}</h1>;}

export default App;
```