import { TextareaProps } from "./Textarea.props";
import cn from 'classnames';
import styles from './Textarea.module.css';
import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef(({error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>):JSX.Element => {
    return (
        <div className={cn(className, styles.textareaWrapper)}>
            <textarea 
                className={cn(styles.textarea,{
                    [styles.error]: error
                })} 
                {...props} 
                ref={ref}
            />
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    )
})

export default Textarea;