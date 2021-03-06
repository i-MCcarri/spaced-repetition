import React, { useEffect, Fragment, useState } from 'react';
import ChineseApiService from '../../services/zhongWen-api-service';
import Result from '../Result/Result';
import Button from '../Button/Button';
import '../../css/InterpretationTest.css';

function CeShi(props) {

    const [word, setWord] = useState({
        nextCharacter: '我',
        nextPinyin: 'wǒ',
        nextWord: 'wo',
        totalScore: 0,
        wordCorrectCount: 0,
        wordIncorrectCount: 0
    })
    const [lastWord, setLastWord] = useState({})
    const [answer, setAnswer] = useState(null)
    const [input, setInput] = useState('')

    useEffect(() => {

        ChineseApiService.getHead()
            .then(yuyan => {
                setWord(yuyan)
            })
            .catch(err => console.log(err, err.message))

        return () => {
            setAnswer(null)
            setInput('')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const regex = /^[A-Za-z]+$/
        if (!regex.test(e.target.value)) {
            return null
        }

        try {
            const newWord = await ChineseApiService.postAnswer(input.trim().toLowerCase())
            setLastWord({ ...word, input })
            setWord(newWord)
            setInput('')
            setAnswer(true)
        }
        catch (error) {
            console.log(error)
        }
    }

    const resultData = {
        input: lastWord.input,
        character: lastWord.nextCharacter,
        pinyin: lastWord.nextPinyin,
        original: lastWord.nextWord,
        translation: word.answer,
        totalScore: word.totalScore,
        isCorrect: word.isCorrect
    }

    return (
        <Fragment>
            {answer === null
                ? <Fragment>
                    <div className='header-zifu'>
                        <div className='header-zifu-title'><br/>
                            <h2>Translate the word:</h2>
                            <span className='zifu'>{word.nextCharacter}{" - "}{word.nextPinyin}</span>
                        </div>
                        <div className='header-zifu-score'>
                            <p>Your total score is: {word.totalScore}</p>
                            <p>You have answered this word correctly {word.wordCorrectCount} times.</p>
                            <p>You have answered this word incorrectly {word.wordIncorrectCount} times.</p>
                        </div>
                    </div>
                    <div>
                    <form className='zifu-wrapper' onSubmit={(e) => handleSubmit(e)}>
                        <fieldset>
                            <legend></legend>
                            <label htmlFor='learn-guess-input'>What's the translation for this word?</label><br/><br/>
                            <input autoComplete='off'
                                id='learn-guess-input'
                                type='text'
                                value={input}
                                onChange={(e) => setInput(e.target.value)} 
                                required 
                            />
                        </fieldset>
                        <div className='btn-wrapper'>
                            <Button type='submit'>Submit your answer</Button>
                        </div>
                    </form>
                    </div>
                </Fragment>
                : <Result {...resultData} setAnswer={(z) => setAnswer(z)} />
            }
        </Fragment>
    )
}


export default CeShi