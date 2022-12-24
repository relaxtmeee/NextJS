import { PHeader } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';

import Logo from '../logo.svg';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { motion, useReducedMotion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = ({className, ...props}: PHeader):JSX.Element => {

    const [isOpened, setIsOpened] = useState<boolean>(false);
    const shouldReduceMOtion = useReducedMotion();
    const router = useRouter();

    useEffect(() => {
        setIsOpened(false)
    }, [router])

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            }
        },
        closed: {
            opacity: shouldReduceMOtion ? 1 : 0,
            x: '100%'
        }
    }

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo />
            <ButtonIcon 
                appearance='white' 
                aria-label="menu"
                id='menu'
                icon='menu' 
                onClick={() => setIsOpened(true)}
            />
            <motion.div className={styles.mobileMenu}
                variants={variants}
                initial='closed'
                animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar />
                <ButtonIcon 
                    appearance='white' 
                    icon='close' 
                    className={styles.menuClose} 
                    onClick={() => setIsOpened(false)}
                />
            </motion.div>
        </header>
    )
}

export default Header;