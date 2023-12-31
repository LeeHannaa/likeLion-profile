import SideBarComponent from '../components/SideBarComponent';
import MainComponent from '../components/MainComponent';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const SideBar = styled.div`
    flex: 0 0 auto;
    height: 100vh;
`;

const MainSection = styled.div`
    flex: 1;
    padding-top: 50px;
    display: flex;
    justify-content: center;
`;
function HomePage() {        
    return (
        <>
        <Container>
            <SideBar>
                <SideBarComponent />
            </SideBar>

            <MainSection>
                <MainComponent />
            </MainSection>

        </Container>
        </>
    );
}

export default HomePage;