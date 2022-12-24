import { useEffect, useReducer } from "react";
import Advantages from "../../components/Advantages/Advantages";
import HhData from "../../components/HhData/HhData";
import Htag from "../../components/Htag/Htag";
import { Sort } from "../../components/Sort/Sort";
import { SortEnum } from "../../components/Sort/Sort.props";
import Tag from "../../components/Tag/Tag";
import { TopLevelCategory } from "../../interfaces/page.interface";
import { sortReducer } from "./sort.reducer";
import styles from './TopPageComponent.module.css';
import { TopPageComponentProps } from "./TopPageComponent.props";
import Product from "../../components/Product/Product";
import { useScrollY } from "../../hooks/useScrollY";
import { useReducedMotion } from "framer-motion";


const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {products, sort: SortEnum.Rating});

    const shouldReduceMOtion = useReducedMotion();

    const setSort = (sort: SortEnum) => { 
        dispatchSort({type: sort});
    }

    useEffect(() => {
        dispatchSort({type: 'reset', initialState: products});
    }, [products])
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag='h1'>
                    {page.title}    
                </Htag>    
                    {products && <Tag color="gray" size='14px' aria-label={products.length + "10 курсов"}>{products.length}</Tag>}  
                <Sort sort={sort} setSort={setSort}/>
            </div>   
            <div role='list'>
                {sortedProducts && sortedProducts.map(p => <Product role='listitem' layout={shouldReduceMOtion ? false : true} key={p._id} product={p}/>)}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag="h2">
                    Вакансии - {page.category}
                </Htag>
                <Tag color="red" size="14px">
                    hh.ru
                </Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {page.advantages && page.advantages.length > 0 && 
            <>
                <Htag tag="h2">
                    Преимущества
                </Htag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}}/>}
            <Htag tag="h2">
                Получаемые навыки
            </Htag>
            {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
        </div>
    );
};

export default TopPageComponent;