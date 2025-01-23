import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ({icon, title, description}) => {
    return(
        <div className="column">
            <div className="card" style={{ height: '270px' }}>
                <span className="icon">
                    <FontAwesomeIcon icon={icon}/>
                </span>
                <h3 className="subtitle">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Card;