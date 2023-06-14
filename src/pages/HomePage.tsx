import { Box } from '@mui/system';
import { Copyright } from '../components/Copyright';
import { Ability } from '../components/Ability';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Home } from '../components/Home';
import { WhatsCanIDoForYou } from '../components/WhatsCanIDoForYou';
import { Header } from '../layout/Header';
import { ProjectsWeb } from '../components/ProjectsWeb';

export function HomePage() {
  return (
    <Box>
      <Box>
        <Box>
          <Header menuVisible={true}/>
        </Box>

        <Box sx={{ marginLeft: '3rem', marginRight: '3rem' }}>
          <div id="home">
            <Home />
          </div>
        </Box>

        <div id="aboutMe">
          <AboutMe />
        </div>
        <div id="doForYou">
          <WhatsCanIDoForYou />
        </div>
      </Box>
      <div id="ability">
        <Ability />
      </div>
      <div id="project">
        <ProjectsWeb />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Copyright />
    </Box>
  );
}
