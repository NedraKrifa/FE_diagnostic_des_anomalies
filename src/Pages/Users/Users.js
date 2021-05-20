import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import UsersBody from '../../Components/Briks/Body/UsersBody/UsersBody';
import AppLayout from '../../Layouts/AppLayout';
import { getMembers } from "../../Redux/actions/Users/usersActions";

export default function Users() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(getMembers()), [dispatch]);
    return (
      <div>
        <AppLayout>
          <UsersBody />
        </AppLayout>
      </div>
    );
}
