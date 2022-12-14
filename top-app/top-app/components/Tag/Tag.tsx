import { TagProps } from "./Tag.props"
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({size='12px', href, children, color = "ghost", className, ...props}: TagProps):JSX.Element => {

    return (
        <div className={cn(styles.tag, {
            [styles.small]: size == '12px',
            [styles.big]: size == '14px',
            [styles.ghost]: color == 'ghost',
            [styles.red]: color == 'red',
            [styles.green]: color == 'green',
            [styles.primary]: color == 'primary',
            [styles.gray]: color == 'gray'
        })}
        {...props}
        >  
        {href 
            ?
            <a href={href}>{children}</a>
            :
            <>{children}</>
        }
        </div>
    )
}

export default Tag;