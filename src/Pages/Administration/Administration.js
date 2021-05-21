import React, { useEffect } from 'react'
import AppLayout from '../../Layouts/AppLayout';
import AdministrationBody from '../../Components/Briks/Body/AdministrationBody/AdministrationBody';
import { useDispatch } from "react-redux";
import { getAllUsers } from "../../Redux/actions/Users/usersActions";

export default function Administration() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllUsers()), [dispatch]);
    return (
        <div>
        <AppLayout>
          <AdministrationBody/>
        </AppLayout>
      </div>
    )
}
