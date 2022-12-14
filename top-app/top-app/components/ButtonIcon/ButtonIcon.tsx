import { ButtonIconProps, icons } from "./ButtonIcon.props";
import ArrowIcon from './arrow.svg'; 

import styles from './ButtonIcon.module.css';
import cn from 'classnames';

const ButtonIcon = ({icon,appearance, className, ...props}: ButtonIconProps):JSX.Element => {

    const IconComp = icons[icon];

    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: appearance == "primary",
            [styles.white]: appearance == "white"
        })}
            {...props}
        >  
            <IconComp />
        </button>
    )
}

export default ButtonIcon;