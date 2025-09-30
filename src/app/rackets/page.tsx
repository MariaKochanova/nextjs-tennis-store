import { RacketSelectionItem } from "@/components/racket-selection-item/racket-selection-item";
import { rackets } from "@/constants/mock";

import styles from "./rackets.module.css";

export default function RacketsPage() {
    return (
        <div className={styles.root}>
            {rackets.map((racket) => (
                <RacketSelectionItem key={racket.id} racket={racket} />
            ))}
        </div>
    );
}