'use client';

import NextLink from 'next/link';
import { ComponentProps, FC } from 'react';
import { usePathname } from 'next/navigation';
import styles from './link.module.css';

type Props = ComponentProps<typeof NextLink>;

export const Link: FC<Props> = ({ children, ...props }) => {
    const pathname = usePathname();

    const isActive = pathname === props.href;

    return (
        <NextLink
            {...props}
            className={
                styles.link + (isActive ? ` ${styles.isActive}` : '')
            }
        >
            {children}
        </NextLink >
    );
};