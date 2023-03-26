export const Anecdote = ({anecdote, vote}) => {
    return (
        <>
            {anecdote}
            <div>
                has {vote + ""} votes
            </div>
        </>
    );
}