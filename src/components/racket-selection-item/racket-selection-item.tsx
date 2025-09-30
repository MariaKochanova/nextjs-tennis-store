import { FC } from "react";

import styles from "./racket-selection-item.module.css";
import { Link } from "../link/link";
import { IRacket } from "@/types/racket";

type Props = {
    racket: IRacket;
};

export const RacketSelectionItem: FC<Props> = ({ racket }) => {
    const { imageUrl, name, id } = racket;

    return (
        <div className={styles.card}>
            <img className={styles.image} src={imageUrl} alt={name} />
            <Link href={`/racket/${id}`}>{name}</Link>
        </div>
    );
};