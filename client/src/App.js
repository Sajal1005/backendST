import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './components/getbook/Book';
import Add from './components/addbook/Add';
import Edit from './components/updatebook/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element: <User/>,
    },
    {
      path:"/add",
      element: <Add/>,
    },
    {
      path:"/edit/:id",
      element: <Edit/>,
    },
  ])

  return (
    <div className="">
             <RouterProvider className='main' router={route}></RouterProvider>
    </div>
  );
}

export default App;
