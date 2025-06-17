import '@/styles/home.scss';
import WebInfo from '@/components/cosas/section/webInfo/webinfo';
import Intro from '@/components/cosas/section/intro/intro';
import TextBox from '@/components/cosas/section/cuadrosInfo/textBox';
import Miniatura from '@/components/cosas/section/portafolio/miniatura';



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
