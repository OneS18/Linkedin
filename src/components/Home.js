import React from 'react';
import styled from 'styled-components';
import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';

const Home = (props) => {
    return (
        <Container>
            <Layout>
                <Leftside />
                <Main />
                <Rightside />
            </Layout>
        </Container>
    );
};

const Container = styled.div`
    padding-top: 60px;
    max-width:100%;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas:'leftside main righthside';
    grid-template-columns: minmax(0, 5fr)minmax(0,12fr)minmax(300px, 7fr);
    columns-gap:25px;
    row-gap: 25px;
    /* grid-template-row: auto; */
    margin:25px 0;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding:0 5px;
    }
`;


export default Home;