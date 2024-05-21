import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align:center;
    align-items: center;
    padding: 20px;
`;

const Avatar = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
`;

const Name = styled.p`
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
`;

const Email = styled.p`
    font-size: 18px;
    color: #555;
`;

const User = () => {
    const { userId } = useParams(); 
    const [userInfo, setUserInfo] = useState({
        avatar: "",
        email: "",
        first_name: "",
        id: "",
        last_name: "",
    });

    useEffect(() => {
        axios
        .get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {
            setUserInfo(res.data.data);
        })
        .catch((e) => {
            console.log(e);
         });
    }, [userId]);

    return (
        <Wrapper>
            <h1>User Information</h1>
            <Avatar src={userInfo.avatar} alt={`${userInfo.first_name} ${userInfo.last_name}`} />
            <Name>{userInfo.first_name} {userInfo.last_name}</Name>
            <Email>{userInfo.email}</Email>
        </Wrapper>
    );
};

export default User;
