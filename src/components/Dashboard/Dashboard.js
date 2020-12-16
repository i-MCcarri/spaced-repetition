import React, { useContext, useEffect, Fragment } from 'react'
import ChineseApiService from '../../services/zhongWen-api-service';
import UserContext from '../../contexts/UserContext';
import ZiFuList from '../ZiFuList/ziFuList';
//import '../../css/Dashboard.css';

function Dashboard() {
    const user = useContext(UserContext)

    useEffect(() => {
        ChineseApiService.getYuYang()
            .then(yuYan => {
                user.setWords(yuYan.words)
                user.setLang(yuYan.language)
            })
            .catch(err => console.log(err, err.message))
    }, [])

    return (
        <Fragment>
            <div className='yuyan-container'>
                <div><br/>
                    <h2>{user.lang.name}</h2>
                    <p>Total correct answers: {user.lang.total_score}</p>
                </div>
            </div>
            <ZiFuList />
        </Fragment>
    )
}

export default Dashboard