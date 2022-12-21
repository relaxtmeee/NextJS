import { ReviewFormProps } from "./ReviewForm.props";
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import CloseIcon from "./close.svg";
import Rating from "../Rating/Rating";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./RevieweForm.interface";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState } from "react";


const ReviewForm = ({productId, className, ...props}: ReviewFormProps):JSX.Element => {

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
            console.log(data);
            
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так')
            }

        } catch (e) {
            setError(e.message)
        }
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)} {...props}>
                <Input 
                    {...register('name', {required: { value: true, message: 'Заполните имя'}})} 
                    placeholder='Имя'
                    error={errors.name}
                />
                <Input 
                    {...register('title', {required: { value: true, message: 'Заполните заголовок'}})} 
                    placeholder="Заголовок отзыва" 
                    className={styles.title}
                    error={errors.title}
                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller 
                        control={control}
                        name='rating'
                        rules={{required: { value: true, message: 'Укажите рейтинг'}}}
                        render={({field}) => {
                            return (
                                <Rating 
                                    isEditable 
                                    setRating={field.onChange} 
                                    ref={field.ref} 
                                    rating={field.value}
                                    error={errors.rating}
                                />
                                    
                            )
                        }}
                    />
                </div>
                <Textarea 
                    {...register('description', {required: { value: true, message: 'Заполните описание'}})} 
                    placeholder="Текст отзыва" 
                    className={styles.description}
                    error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance="primary">Отправить</Button>
                    <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
           {isSuccess && <div className={cn(styles.succes, styles.panel)}>
                <div  className={styles.succesTitle}>
                    Ваш отзыв отправлен
                </div>
                <CloseIcon className={styles.close}/>
                <div  className={styles.succesDescription}>
                    Спасибо, ваш отзыв будет опубликован после проверки
                </div>
                <CloseIcon onClick={() => setIsSuccess(false)} className={styles.close}/>
            </div>}
            {error && <div className={cn(styles.error, styles.panel)}>
                Что-то пошло не так, попробуйте обновить страницу
                <CloseIcon onClick={() => setError('')} className={styles.close}/>
            </div>}
        </form>
    )
}

export default ReviewForm;