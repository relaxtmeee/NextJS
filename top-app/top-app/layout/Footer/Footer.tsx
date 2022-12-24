import { PFooter } from './Footer.props';
import cn from 'classnames';
import styles from './Footer.module.css';
import format from 'date-fns/format';

const Footer = ({className, ...props}: PFooter):JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props} role='footer'>
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href='#'>
                Пользовательское соглашение
            </a>
            <a href='#'>
                Политика конфиденциальности
            </a>
        </footer>
    )
}

export default Footer;