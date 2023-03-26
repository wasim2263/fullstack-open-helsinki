import {StaticticsLine} from "./StaticticsLine";

export const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + Math.abs(bad);
    return (
        <>
            <h1>statistics</h1>
            {all !== 0 ? (
                <table>
                    <tbody>
                    <StaticticsLine name="good" value={good}/>
                    <StaticticsLine name="neutral" value={neutral}/>
                    <StaticticsLine name="bad" value={bad}/>
                    <StaticticsLine name="all" value={good + neutral + Math.abs(bad)}/>
                    <StaticticsLine name="average" value={(good + bad) / all}/>
                    <StaticticsLine name="positive" value={((good * 100 )/ all) + " %"}/>
                    </tbody>
                </table>

            ) : <div>No feedback given</div>
            }

        </>
    );
}