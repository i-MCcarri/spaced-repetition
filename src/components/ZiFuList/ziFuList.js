import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import ChineseApiService from '../../services/zhongWen-api-service';

function ZiFuList() {
    const user = useContext(UserContext)

    useEffect(() => {
        ChineseApiService.getHead()
            .then(yuYan => console.log(yuYan))
            .catch(err => console.log(err, err.message))
    }, [])


    return (
        <Fragment>
            <div className='zifu-list-title-wrapper'>
                <h3>Words to practice</h3>
                <Link to='/learn'>
                    <button className='practice'>Start practicing</button>
                </Link>
            </div>

            <ul className='zifu-list-wrapper'>
                {user.words.map((zifu, index) => (
                    <li className='list' key={index}>
                        <h4 className='zifu-stat list-zhongwen-zifu'>{zifu.character}{" - "}{zifu.pinyin}</h4>
                        <p className='zifu-stat counts correct-count'>correct answer count: {zifu.correct_count}</p>
                        <p className='zifu-stat counts incorrect-count'>incorrect answer count: {zifu.incorrect_count}</p>
                    </li>))}
            </ul>
        </Fragment>
    )
}

export default ZiFuList