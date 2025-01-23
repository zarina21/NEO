import Info from "./info";
import DataInfo from "./DataInfo"; // Make sure to import DataInfo

const WebInfo = () => {
    return(
        <section className="mt-6">
            <div className="columns">
                <div className="column is-full has-text-centered mt-6 mb-6">
                    <h1 className="title is-1">What does my business need?</h1>
                    <p>Every business is unique and has different needs. Do you want to know the needs of your business?</p>
                </div>
            </div>
            <section>
                <div className="fixed-grid has-3-cols">
                    <div className="grid hscard mb-6 is-gap-8">
                    {/* Here we map through DataInfo to pass each object individually */}
                    {DataInfo.map((data, index) => (
                        <Info 
                            key={index} 
                            title={data.title} 
                            subtitle={data.subtitle} 
                            paragraph={data.paragraph} 
                            imageUrl={data.imageUrl} 
                            showMore={data.showMore}
                        />
                    ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default WebInfo;
