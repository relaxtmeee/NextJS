import { PProps } from "./P.props";
import cn from 'classnames';
import styles from './P.module.css';

const P = ({children, size = '16px', className, ...props}: PProps):JSX.Element => {
    return (
        <p className={cn(styles.p, {
            [styles.small]: size == '14px',
            [styles.big]: size == '18px',
        })}
        {...props}
        >
            {children}
        </p>
    )
}

export default P;