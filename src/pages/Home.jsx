import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import Card from '../components/Card';
import { Link } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  padding: 20px;
  text-align: center;
  font-size: 62px;
  font-weight: bold;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-grow: 1; 
  max-height: 700px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Home = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users?per_page=9`)
            .then((res) => {
                setUserInfo(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <HomeContainer>
            <Header>Home Page</Header>
            <MainContainer>
                <GridContainer>
                    {userInfo.length > 0 && userInfo.map((user, index) => (
                        <Card key={index} img={user.avatar} name={`${user.first_name} ${user.last_name}`} id={user.id} />
                    ))}
                </GridContainer>
            </MainContainer>
            <Footer>
                <Link to='/Menu'>메뉴 페이지로 고고</Link>
            </Footer>
        </HomeContainer>
    );
};

export default Home;
