import styles from "./footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.subtitle}>
                Tennis store
            </div>
            <div className={styles.copyright}>
                &copy;&nbsp;2025 Tennis store. All rights reserved.
            </div>
        </footer>
    )
};