import { ProductProps } from "./Product.props";
import cn from 'classnames';
import styles from './Product.module.css';
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import { priceRu, declOfNum } from "../../helpers/helpers";
import Divider from "../Divider/Divider";
import Image from "next/image";
import { useRef, useState } from "react";
import Review from "../Review/Review";
import ReviewForm from "../ReviewForm/ReviewForm";
import P from "../P/P";

const Product = ({product, className, ...props}: ProductProps):JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    return (
       <div className={className} {...props}>
        <Card className={styles.product}>
            <div className={styles.logo}> 
                <Image 
                    src={process.env.NEXT_PUBLIC_DOMAIN +  product.image} 
                    alt={product.title}
                    width={70}
                    height={70}    
                />
            </div>
            <div className={styles.title}>
                {product.title}
            </div>
            <div className={styles.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag className={styles.oldprice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={styles.credit}>
                {priceRu(product.credit)}/<span className={styles.month}>мес</span>
            </div>
            <div className={styles.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating}/>
            </div>
            <div className={styles.tags}>
                {product.categories.map(c => <Tag key={c} className={styles.category} color="ghost">{c}</Tag>)}
            </div>
            <div className={styles.priceTitle}>
                Цена
            </div>
            <div className={styles.creditTitle}>
                Кредит
            </div>
            <div className={styles.rateTitle}>
                <a href="#ref" onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a>
            </div>
            <Divider className={styles.hr}/>
            <div className={styles.description}>
                {product.description}
            </div>
            <div className={styles.feature}>
                {product.characteristics.map(c => {
                    return (
                        <div key={c.name} className={styles.characteristics}>
                            <span className={styles.characteristicsName}>
                                {c.name}
                            </span>
                            <span className={styles.characteristicsDots}>

                            </span>
                            <span  className={styles.characteristicsValue}>
                                {c.value}
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className={styles.advBlock}>
                
                {product.advantages &&  <div className={styles.advantages}>
                    <div className={styles.advTitle}>Преимущества</div>
                    <div>{product.advantages} </div>
                </div>}
                {product.disadvantages && <div className={styles.disadvantages}>
                    <div className={styles.advTitle}>Недостатки</div>
                    <div>{product.disadvantages} </div>
                </div>}
            </div>
            <Divider className={cn(styles.hr, styles.hr2)}/>
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button 
                    className={styles.reviewButton} 
                    appearance='ghost' 
                    arrow={isReviewOpened ? "down" : 'right'}
                    onClick={() => setIsReviewOpened(!isReviewOpened)}
                >
                    Читать отзывы
                </Button>
            </div>
        </Card>
        <Card 
            color="blue" 
            className={cn(styles.reviews, {
                [styles.opened]: isReviewOpened,
                [styles.closed]: !isReviewOpened
            })}
            ref={reviewRef}
        >
            {product.reviews.map(r => {

                return (
                    <div key={r._id}>
                        <Review review={r}/>
                        <Divider/>
                    </div>
                )
            })}
            <ReviewForm productId={product._id}/>
        </Card>
       </div>
    )
}

export default Product;