import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/actions/Users/usersActions";
import ProfileBody from '../../Components/Briks/Body/ProfileBody/ProfileBody';
import AppLayout from '../../Layouts/AppLayout';

export default function Profile() {
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => dispatch(getUser(id)), [id,dispatch]);
    const user = useSelector((state) => state.users.user);
    return (
        <AppLayout>
          <ProfileBody user={user}/>
        </AppLayout>
    )
}
