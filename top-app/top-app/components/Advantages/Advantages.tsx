import { AdvantagesProps } from "./Advantages.props";
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';

const Advantages = ({advantages}: AdvantagesProps):JSX.Element => {



    return (
        <div>
            {advantages.map(a => {
                return (
                    <div key={a._id} className={styles.advantage}>
                        <CheckIcon/>
                        <div className={styles.title}>
                            {a.title}
                        </div>
                        <hr className={styles.vline}/>
                        <div>
                            {a.description}
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 

export default Advantages;