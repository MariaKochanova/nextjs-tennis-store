import { FC, PropsWithChildren } from "react";
import { Link } from "../link/link";

import styles from "./selection.module.css";

type Props = PropsWithChildren & {
    title: string;
    hrefToAll?: string;
};

export const Selection: FC<Props> = ({ children, hrefToAll, title }) => {
    return (
        <section>
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
                {hrefToAll && <Link href={hrefToAll}>Все</Link>}
            </div>
            <div className={styles.content}>{children}</div>
        </section>
    );
};