import React, { useState } from 'react';
import { styled } from '@mui/system';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GitHubIcon from '@mui/icons-material/Github';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../index.css';

interface Props {
  title: string;
}

export const DecorationTopLeft = styled('div') ({
    display: 'flex',
    width: '10%',
    height: '15%',
    borderStyle: 'solid',
    borderWidth: '1.2vh 0 0 1.2vh',
    borderColor: '#ff6347',
    position: 'absolute',
    top: '20%',
    left: '12%',
    zIndex: '1',
    cursor: 'pointer'
})

export const DecorationBottomRight = styled('div') ({
    display: 'flex',
    width: '10%',
    height: '15%',
    borderStyle: 'solid',
    borderWidth: '0 1.2vh 1.2vh 0',
    borderColor: '#ff6347',
    position: 'absolute',
    bottom: '20%',
    right: '12%',
    zIndex: '1'
})

export const Root = styled('div')({
    padding: 0,
    margin: 0,
});

export const Main = styled('main')({
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(29, 29, 32)',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const NavBarContainer = styled('div')({
    display: 'flex',
    alignItems: 'right',
    position: 'absolute',
    top: '24%',
    right: '25%',
    cursor: 'pointer',
});

export const IconWrapper = styled('div')({
    marginRight: '12%',
    transition: 'transform 0.4s ease',
    '&:hover': {
        transform: 'scale(1.4)',
    },
    'a': {
        color: '#ff6347',
        '&:hover': {
        color: 'white',
        },
    },
});
  
export const MainText = styled('div')({
    textAlign: 'left',
    color: '#C0C0C0',
    fontFamily: 'verdana',
    display: 'flex',
    flexDirection: 'row'
});

export const WelcomeSection = styled('div')<{
    show: boolean;
  }>(
    {
        marginRight: '1%',
        maxWidth: '34em',
        'h1': {
            fontSize: '4vw',
        },
        'a': {
            fontSize: '1.2vw',
            color: '#C0C0C0',
            cursor: 'pointer',
            transition: 'transform 0.4s ease',
            transformOrigin: 'left',
            '&:hover': {
                transform: 'scale(1.2)',
                color: 'white',
            },
        },
    },
  );
  

export const ProjectsSection = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '2%',
    maxWidth: '20em',
    justifyContent: 'space-evenly',
    'h2': {
        fontSize: '250%',
    },
    'p': {
        cursor: 'pointer',
        transition: 'transform 0.4s ease',
        transformOrigin: 'left',
        '&:hover': {
        transform: 'scale(1.1)',
        color: 'white',
        },
    },
});

export const Home = (props: Props) => {
    const [showProjectDescription, setShowProjectDescription] = useState(false);
    const [selectedProject, setSelectedProject] = useState('')
    const [toggle, setToggle] = useState(false)

    const handleProjectClick = (projectName: string) => {
        setShowProjectDescription(true);
        setSelectedProject(projectName);
        setToggle((prevToggle) => !prevToggle);
    };

    const handleWelcomeClick = () => {
        setShowProjectDescription(false)
        setToggle((prevToggle) => !prevToggle)
    }

    return (
    <Root>
        <DecorationTopLeft onClick={handleWelcomeClick} />
        <DecorationBottomRight />
            <Main>
                <NavBarContainer>
                    <IconWrapper>
                        <a href="mailto:nhientattran@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <MailOutlineIcon sx={{ fontSize: '2vw' }} />
                        </a>
                    </IconWrapper>
                    <IconWrapper>
                        <a href="https://www.github.com/nhientattran" target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon sx={{ fontSize: '2vw' }} />
                        </a>
                    </IconWrapper>
                    <IconWrapper>
                        <a href="https://www.linkedin.com/in/nhientattran/" target='_blank' rel='noopener noreferrer'>
                        <LinkedInIcon sx={{ fontSize: '2vw' }} />
                        </a>
                    </IconWrapper>
                </NavBarContainer>
                <MainText>
                <TransitionGroup>
                    <CSSTransition
                    key={toggle.toString()}
                    classNames="slide"
                    timeout={300}
                    >
                    {showProjectDescription ? (
                        <WelcomeSection show={!showProjectDescription}>
                            {selectedProject === 'Pet Lovers Web Application' ? (
                            <div>
                                <h2 style={{fontSize:'250%', marginBottom: '0.3vw'}}>Pet Lovers Web Application</h2>
                                <p style={{fontSize: '100%', marginBottom:'0.5vw'}}>Pet Lovers is a full-stack web app that connects pet enthusiasts with adoptable pets using React.js and Node.js. It integrates a Restful API for detailed pet information and 
                                    uses Firebase for user authentication. The visually appealing UI is built with Material-UI. Users can save favorite pets with Flask and PostgreSQL backend, view them on the 
                                    favorites page, and access the app on Firebase hosting. The project showcases strong problem-solving skills and attention to detail for successful delivery.</p>
                                <a href="https://petlovers-6a5d7.web.app/" target='_blank' rel='noopener noreferrer'>View Site</a>
                            </div>
                            ) : selectedProject === 'Weather Forecast Web Application' ? (
                                <div>
                                    <h2 style={{fontSize:'2vw', marginBottom: '0.3vw'}}>Weather Forecast Web Application</h2>
                                    <p style={{fontSize: '100%', marginBottom:'0.5vw'}}>This project is a user-friendly and interactive web application built with JavaScript and CSS. It utilizes the OpenWeather API to provide 
                                    real-time weather data and forecasts based on user's input of their city and zipcode. The application also features captivating visuals sourced from the Unsplash 
                                    Images API, which change dynamically based on current weather conditions, enhancing the overall user experience. Deployment is facilitated through Glitch, a 
                                    hosting and version control platform that simplifies sharing and eliminates the need for server configuration or maintenance.</p>
                                    <a href="https://nhiens-weather-forecast.glitch.me/" target='_blank' rel='noopener noreferrer'>View Site</a>
                                </div>
                            ) : selectedProject === 'Marvel Characters Inventory Web Application' ? (
                                <div>
                                    <h2 style={{fontSize:'2vw', marginBottom: '0.3vw'}}>Marvel Characters Inventory Web Application</h2>
                                    <p style={{fontSize: '100%', marginBottom:'0.5vw'}}>The Marvel Character Inventory App is a full-stack application developed independently, covering both front-end and back-end 
                                    implementation. It utilizes the Marvel API to fetch character data, including descriptions, movie appearances, and superpowers, enriching users' character 
                                    inventories. The app features a robust Flask-based RESTful API to handle data communication with a PostgreSQL database, ensuring data integrity and scalability. 
                                        The deployment on cloud platforms like Glitch for front-end hosting and ElephantSQL for back-end deployment guarantees high availability and scalability.</p>
                                    <a href="https://marvel-inventory.glitch.me/" target='_blank' rel='noopener noreferrer'>View Site</a>
                                </div>
                            ) : null }
                        </WelcomeSection>
                    ) : (
                        <WelcomeSection show={showProjectDescription}>
                        <h1>Welcome.</h1>
                        <p>My name is Nhien Tran, and I'm a recent graduate from a Full-Stack Software Engineering bootcamp and
                            Computer Engineering Technology University program. </p>
                        <br></br>
                        <p>I possess a demonstrated aptitude for creating innovative
                            solutions that enhance user experiences and drive technological progress.</p>
                        </WelcomeSection>
                    )}
                    </CSSTransition>
                </TransitionGroup>
                <ProjectsSection>
                    <h2>Projects</h2>
                    <p onClick={() => {handleProjectClick('Pet Lovers Web Application')}}>Pet Lovers Web Application</p>
                    <p onClick={() => {handleProjectClick('Weather Forecast Web Application')}}>Weather Forecast Web Application</p>
                    <p onClick={() => {handleProjectClick('Marvel Characters Inventory Web Application')}}>Marvel Characters Inventory Web Application</p>
                </ProjectsSection>
                </MainText>
            </Main>
        </Root>
    );
};
