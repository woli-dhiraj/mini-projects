import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./Components/Home/Home";
import Index from "./Components/Accordion/Index";
import RandomColor from "./Components/RandomColor/RandomColor";
import StarRating from "./Components/StarRating/StarRating";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import LoadMore from "./Components/LoadMore/LoadMore";
import FileStructure from "./Components/FileStructure/FileStructure";
import Progressbar from "./Components/Progressbar/Progressbar";
import Search from "./Components/Searchbox/Search";
import Otp from "./Components/OTP/Otp";
import Currency from "./Components/Currency Converter/Currency";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'',
      element:<Home/>
    },
    {path:'about',
      element:<About/>
    },
    {path:'contact',
      element:<Contact/>
    },
    {path:'accordion',
      element:<Index/>
    },
    {path:'randomcolor',
      element:<RandomColor/>
    },
    {path:'carousel',
      element:<ImageSlider/>
    },
    {path:'starrating',
      element:<StarRating/>
    },
    {path:'progressbar',
      element:<Progressbar/>
    },
    {path:'currency',
      element:<Currency/>
    },
    {path:'search',
      element:<Search/>
    },
    {path:'loadmore',
      element:<LoadMore/>
    },
    {path:'otp',
      element:<Otp/>
    },
    {path:'file',
      element:<FileStructure/>
    },
    
  
  ]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
