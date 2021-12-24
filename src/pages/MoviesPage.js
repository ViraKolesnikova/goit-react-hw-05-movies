import { Outlet, Route, Routes } from "react-router-dom";

import SearchForm from "../components/SearchForm/SearchForm";


export default function MoviesPage() {
  return <div>
    <Routes>
      <Route path="" element={ <SearchForm/>}/>      
    </Routes>
    
    <Outlet/>
  </div>
}