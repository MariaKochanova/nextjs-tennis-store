import { IRacket } from '@/types/racket';
import { FC } from 'react';

import styles from './racket.module.css';

type Props = {
    racket: IRacket;
}

export const Racket: FC<Props> = ({ racket }) => {
    const { name, imageUrl, description, brand, price, model } = racket;

    return (
        <section className={styles.section}>
            <div>
                <div className={styles.brand}>{brand.name}</div>
                <div className={styles.name}>{name}</div>
                <div>{description}</div>
            </div>
            <img className={styles.image} src={imageUrl} alt={name} />
            <div>
                <div>Price: {price}</div>
                <div>Model: {model}</div>
            </div>
        </section>
    );
}