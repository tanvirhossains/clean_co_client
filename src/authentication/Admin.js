import React, { Children } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';



const Admin = ({children}) => {
const location = useLocation();

const [admin] = UseAdmin();

if(!admin){
    return <Navigate to='/'  replace></Navigate>
}

    return children;
    
};

export default Admin;