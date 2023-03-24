export const Statistics = ({good, neutral, bad}) => {
    return (
        <>
            <h1>statistics</h1>
            <span>good {good}</span>
            <span>neutral {neutral}</span>
            <span>bad {bad}</span>
            <span>total {good+neutral+Math.abs(bad)}</span>
        </>
    );
}