// import { Link } from "@/components/link/link";

import styles from "./header.module.css";

export const Header = () => {
    return (
        // <header className={styles.header}>
        //     <span>TENNIS STORE</span>
        //     <div className={styles.rightSection}>
        //         <Link href='/'>Главная</Link>
        //         <Link href='/rackets'>Ракетки</Link>
        //     </div>
        // </header>
        <header className={styles.header}>
            <h1 className={styles.title}>
                tennis store
            </h1>
            <nav className={styles.nav}>
                {/* <Link href='/'>Главная</Link>
                <Link href='/rackets'>Ракетки</Link> */}
                Главная Ракетки
            </nav>
        </header>
    );
};