import Card from "../../components/Card/Card";
import HhData from "../../components/HhData/HhData";
import Htag from "../../components/Htag/Htag";
import Tag from "../../components/Tag/Tag";
import { TopLevelCategory } from "../../interfaces/page.interface";
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from "./TopPageComponent.props";

const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>
                    {page.title}    
                </Htag>    
                    {products && <Tag color="gray" size='14px'>{products.length}</Tag>}  
                <span>Сортировка</span>
            </div>   
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">
                    Вакансии - {page.category}
                </Htag>
                <Tag color="red" size="14px">
                    hh.ru
                </Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}
        </div>
    );
};

export default TopPageComponent;