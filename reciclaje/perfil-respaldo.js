import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faDiscord, faTiktok } from '@fortawesome/free-brands-svg-icons';
import profiles from './team'; // Importando los perfiles desde team.js

const Perfiles = () => {
    return (
        <div className='mb-6 colums is-one-fifth'>
            <div className="columns is-multiline">
                {profiles.map((profile, index) => (
                    <div className="column is-3 border mr-1 ml-1 mt-2 mb-2" key={index}>
                        <div className="profile-card">
                            <div className="profile-image-wrapper">
                                <img src={profile.imgSrc} alt={profile.name} className="profile-image" />
                            </div>
                            <h3 className="profile-name">{profile.name}</h3>
                            <div className="profile-socials">
                                {Object.entries(profile.socials).map(([key, value]) => (
                                    <a key={key} href={value} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={key === 'github' ? faGithub : key === 'linkedin' ? faLinkedin : key === 'instagram' ? faInstagram : key === 'discord' ? faDiscord : faTiktok} className="social-icon" />
                                    </a>
                                ))}
                            </div>
                            <p className="profile-experience">{profile.experience.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Perfiles;
