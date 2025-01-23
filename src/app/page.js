import '@/styles/Home.scss';
import Intro from '/src/components/cosas/section/intro/intro.js';
import TextBox from '/src/components/cosas/section/cuadrosInfo/textBox.js';
import WebInfo from '/src/components/cosas/section/WebInfo/webinfo.js';
import Miniatura from '/src/components/cosas/section/portafolio/miniatura.js';

const Home = () => {
    return (
        <div className="mr-6 ml-6">
            <Intro/>
            <TextBox/>
            <WebInfo/>
            <Miniatura/>
        </div>
    );
};

export default Home;
