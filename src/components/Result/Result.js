import React, { Fragment } from 'react';

function Result(props) {
    return (
        <div>
            <div className='score'>
                <p>Your total score is: {props.totalScore}</p>
            </div>
            {props.isCorrect
                ? <h2>You were correct!</h2>
                : <h2>Almost! Try again</h2>
            }
            <div className='user-feedback'>
                <p>The correct translation for {props.original} was {props.translation} and you chose {props.input}!</p>
            </div>

            <button onClick={() => {
                props.setAnswer(null)
            }}>Try the next word!</button>
        </div>
    )
}

export default Result