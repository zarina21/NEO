import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Info = ({ title, subtitle, paragraph, imageUrl, showMore }) => {
    return (
        <section className="cell">
            <div className="card mt-4">
                <article>
                    {/* Mostramos las propiedades pasadas como props */}
                    <h1 className="title is-3 mb-1">{title}</h1>
                    <h1 className="subtitle is-4">{subtitle}</h1>
                    <p className="mb-6">{paragraph}</p>
                    {imageUrl && <Image src={imageUrl} alt="Informational" width={500} height={300} />}
                    <p className="enlace"> <Link href={showMore}>Show more</Link> </p>
                </article>
            </div>
        </section>
    );
};

export default Info;
