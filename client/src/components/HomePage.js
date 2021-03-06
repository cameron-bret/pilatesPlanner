import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HomeStyle = styled.div`
    text-align: center;
    height: 100vh;
`

class HomePage extends Component {
    render() {
        return (
            <HomeStyle>
            <div>
            <br></br>
            <Link to="/">
            <a href="https://imgur.com/i80rpSA"><img src="https://i.imgur.com/i80rpSA.png" alt="pilates planner header with logo" /></a>
                </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/lessons">
                <a href="https://imgur.com/pICwU5q"><img src="https://i.imgur.com/pICwU5q.png" alt="muscle group selector" /></a>
                </Link>
            </HomeStyle>
        )
    }
}

export default HomePage