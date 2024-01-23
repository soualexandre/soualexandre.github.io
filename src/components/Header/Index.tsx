"use client"
import styles from './header.module.css';
import { useState } from 'react';
import { scrollTo } from '@/utils/scroolTo';
import Link from 'next/link';
export default function Header() {

    const itemHeaderClick = (item: any) => {
        scrollTo(item);
    };

    return (
        <div className="my-4 flex text-white justify-between items-center w-full p-4">
            <div className="text-bold">AS</div>
            <div className="itmns flex gap-4">
                <div className={`${styles.borderBottom}`}>
                    Início
                </div>
                <a onClick={() => itemHeaderClick("sobre")} className={`${styles.borderBottom} cursor-pointer`}>
                    Sobre mim
                </a>
                <div className={`${styles.borderBottom}`}>
                    Projetos
                </div>
            </div>

            <div>
                <div className="p-4 rounded-full bg-white"></div>
            </div>
        </div>
    );
}