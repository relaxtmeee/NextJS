import { PSidebar } from './Sidebar.props';
import cn from 'classnames';
import styles from './Sidebar.module.css';

const Sidebar = ({...props}: PSidebar):JSX.Element => {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}

export default Sidebar;