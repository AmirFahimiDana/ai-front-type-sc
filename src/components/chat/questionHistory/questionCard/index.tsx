import styles from '../../questionHistory/questionHistory.module.css'
import AnimateButton from '../../../../hoc/button';
import { useDispatch } from 'react-redux';
import { closePopup, openPopup } from '../../../../redux/slice/popupSlice';


const QuestionCard = (props: any) => {
    const { id, title, query } = props.props;

    const clickHandler = () => {

        var message = title
        props.handleCallback(message)
    }

    const dispatchPopup = useDispatch();

    const handleOpenPopup = () => {
        dispatchPopup(openPopup({ query: { query }, question: { title }, isOpen: true }));
    };


    return (
        <>

            <div id='questionCard' className={styles.card} key={id} onClick={clickHandler}>
                <span>
                    {title}
                </span>
                {/* <audio controls controlsList='nodownload' src='blob:http://localhost:3000/ed522340-d967-4976-a3b9-95f0f54b5ae1' /> */}
                <div className={styles.button_container}>
                    <AnimateButton clickHandler={handleOpenPopup} txt='نمایش کوئری' />
                </div>
            </div>


        </>
    )
}

export default QuestionCard