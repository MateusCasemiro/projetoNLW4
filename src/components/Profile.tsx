import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="imagem.jpg"  alt="Mateus" />
            <div>
                <strong>Mateus</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level { level }
                </p>
            </div>
        </div>
    );
}