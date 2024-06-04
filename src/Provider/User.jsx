import React, { useContext, useEffect, useState } from 'react';
import { getProfile } from '../redux/apiSlice/Authentication/getProfileSlice';
import { useDispatch, useSelector } from 'react-redux';
export  const UserContext = React.createContext(null);

export const useUser= ()=>{
    return useContext(UserContext)
}

export const UserProvider = (props)=>{
    const {profile} = useSelector(state=> state.profile);
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProfile())
    }, [dispatch]);

    useEffect(()=>{
        setUser(profile);
    }, [profile]);


    return(
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    )
}