import dayjs from 'dayjs';
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);


export const isAuthenticated = () =>{
    return localStorage.getItem('token');
}

export const convertDate = (date) =>{
    return dayjs(date).format('llll');
}