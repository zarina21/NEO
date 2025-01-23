import Image from 'next/image';
import ContactButton from '/src/components/button/contactButton.js';

const Intro = () => {
    return(
        <section className="section animacion">
            <div className="container">
                <div className="columns mt-1">
                    <div className="column">
                        <div className="image-wrapper">
                            <Image 
                                src="/image/anime.png" 
                                alt="Image description" 
                                width={5376} 
                                height={3075}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <div className="fade-overlay"></div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="grid is-col-min-16 is-row-gap-1">
                            <h1 className="title is-1">Nova Enterprise</h1>                                
                            <h2 className="subtitle">If you can imagine it, you can code it</h2>
                            <p className="mt-4 mb-4">
                            At Nova Enterprise, we specialize in providing comprehensive web development and custom programming solutions, designed to precisely meet the needs and goals of each client. Our mission is to help businesses of all sizes establish a strong and effective online presence, using cutting-edge technologies and a highly adaptable approach.
                            </p>
                            <ContactButton/>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Intro;
