import {useEffect, useState} from "react";
import {Button} from "./components/Buttons";
import {Anecdote} from "./components/Anecdote";

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    const anecdeotesLength = anecdotes.length;
    const [selected, setSelected] = useState(0)
    const [maxVoted, setMaxVoted] = useState(null)
    const [votes, setVotes] = useState([])
    useEffect(() => {
        const initiateVotes = Array(anecdeotesLength).fill(0)
        setVotes(initiateVotes);
        const selected = Math.floor(Math.random() * anecdeotesLength);
        // console.log(selected)
        setSelected(selected)
    }, [])
    const getNextAnecdotes = () => {

        const selected = Math.floor(Math.random() * anecdeotesLength);
        // console.log(selected)
        setSelected(selected)
    }
    const vote = () => {
        let copyVotes = {...votes}
        copyVotes[selected] += 1

        setVotes(copyVotes);
        console.log(copyVotes);
        const maxVoteIndex = Object.keys(copyVotes).reduce((previousValue, currentValue) => copyVotes[previousValue] < copyVotes[currentValue] ? currentValue : previousValue)
        // console.log(copyVotes, maxVote);
        // const indexOfMaxVote = copyVotes.indexOf(maxVote)
        setMaxVoted(maxVoteIndex)
    }

    return (
        <div>
            <div>
                <h1>Anecdote of the day</h1>
                <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]}/>
            </div>
            <div>
                <Button name='vote' handleOnclickFunction={vote}/>
                <Button name='next anecdotes' handleOnclickFunction={getNextAnecdotes}/>
            </div>
            <div>
                <h1>Anecdote with most votes</h1>
                {
                    maxVoted != null ? <Anecdote anecdote={anecdotes[maxVoted]} vote={votes[maxVoted]}/> : "None"

                }
            </div>
        </div>
    );
}

export default App;
