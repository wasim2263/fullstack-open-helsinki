

export const Feedback = ({updateGood, updateNeutral, updateBad}) => {
    return (
        <>
            <h1>give feedback</h1>
            <p>
                <button onClick={()=>updateGood()} >good</button>
                <button onClick={()=>updateNeutral()}>neutral</button>
                <button onClick={()=>updateBad()}>bad</button>
            </p>
        </>
    );
}