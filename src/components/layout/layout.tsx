import { PropsWithChildren, FC } from "react";

import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";

import styles from "./layout.module.css"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    );
};