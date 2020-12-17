import React, { Fragment } from 'react';
import Button from '../Button/Button';

function Result(props) {
    return (
        <div>
            <div className='DisplayScore'>
                <p>Your total score is: {props.totalScore}</p>
            </div>
            {props.isCorrect
                ? <h2>You were correct! :D</h2>
                : <h2>Good try, but not quite right :(</h2>
            }
            <div className='DisplayFeedback'>
                <p>The correct translation for {props.original} was {props.translation} and you chose {props.input}!</p>
            </div>

            <Button onClick={() => {
                props.setAnswer(null)
            }}>Try another word!</Button>
        </div>
    )
}

export default Result