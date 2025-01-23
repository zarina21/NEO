import React from 'react';
import Card from './Card'; // Importamos el componente Card
import { cardData } from './data'; // Importamos la lista de datos

const TextBox = () => {
    return (
        <section>
            <div>
                <div className="columns">
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default TextBox;