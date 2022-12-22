import cn from 'classnames';
import styles from './Menu.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { firstLevelMenu } from '../../helpers/helpers';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const Menu = ()=> {

    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    }

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 'auto'
        },
        hidden: {
            opacity: 0,
            height:0
        }
    }

    const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

    const buildFirstLevel = () => {

        return (
            <>
               {firstLevelMenu.map(m => (
					<>
						<Link key={m.id} legacyBehavior href={`/${m.route}`}>
							<a>
								<div className={cn(styles.firstLevel, {
									[styles.firstLevelActive]: m.id == firstCategory
								})}>
									{m.icon}
									<span>{m.name}</span>
								</div>
							</a>
						</Link>
						{m.id == firstCategory && buildSecondLevel(m)}
					</>
				))}
            </>
        )
    }

    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        
        return (
            <div className={styles.secondBlock}>
                 {menu.map(m => {

                    if(m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }

                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                            </div>
                            <motion.div 
                                className={cn(styles.secondLevelBlock)}
                                layout
                                initial={m.isOpened ? 'visible' : 'hidden'}
                                animate={m.isOpened ? 'visible' : 'hidden'}
                                variants={variants}    
                            >
                                {buildThirdLevel(m.pages, menuItem.route)}
                            </motion.div>
                        </div>
                    );
                   
                })}
            </div>
        )
    }

    const buildThirdLevel = (pages: PageItem[], route: string) => {

        return (
            pages.map(p => {
                return (
                    <motion.div key={p._id} variants={variantsChildren}>
                        <Link legacyBehavior href={`/${route}/${p.alias}`}>
                            <a className={cn(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                            })}>
                                {p.category}
                            </a>
                        </Link>
                    </motion.div>
                )
            })
        )
    }


    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}

export default Menu;