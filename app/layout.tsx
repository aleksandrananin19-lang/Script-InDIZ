import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
const inter=Inter({subsets:['latin','cyrillic'], variable:'--font-inter'});
export const metadata: Metadata={title:'AVBOOK — выпускные альбомы в Барнауле и Новосибирске', description:'Премиальные выпускные альбомы AVBOOK: фотосессия, ретушь, дизайн, печать и доставка для 4, 9 и 11 классов.'};
export default function RootLayout({children}: { children: ReactNode }){return <html lang="ru"><body className={inter.variable}>{children}</body></html>}
