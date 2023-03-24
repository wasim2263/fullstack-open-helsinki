import {Button} from './FeedbackButton'

export const Feedback = ({updateGood, updateNeutral, updateBad}) => {
    return (
        <>
            <h1>give feedback</h1>
            <p>
                <Button handleOnclickFunction={updateGood} name="good"/>
                <Button handleOnclickFunction={updateNeutral} name="neutral"/>
                <Button handleOnclickFunction={updateBad} name="bad"/>
            </p>
        </>
    );
}