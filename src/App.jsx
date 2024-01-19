
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Stack from './components/stacks'
import Skills from './components/skills'
import Projects from './components/projects'
import Contacts from './components/contacts'
const App = () => {
    return(
        <BrowserRouter>

        <div className='relative z-0'>
        
            <div>
                <Navbar />
                <Home />
                <About />

                <div>
                    <Stack/>

                </div>
                <div>
                <Skills/>
                </div>
                <div>
                    <Projects/>
                </div>
                <div>
                    <Contacts/>
                </div>
            </div>
        </div>

        

        </BrowserRouter>

    )
}

export default App;
