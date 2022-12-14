import { PHeader } from './Header.props';
import cn from 'classnames';
import styles from './Header.module.css';

const Header = ({...props}: PHeader):JSX.Element => {
    return (
        <div {...props}>
            Header
        </div>
    )
}

export default Header;