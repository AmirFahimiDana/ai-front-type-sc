import React from 'react'
import { examples } from '../../data/example'
import { IReasearchGate } from '../../interface/iResearchGate'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>{examples.map((data: IReasearchGate) => {
            return <Link to="/chat">{data.title}</Link>
        })}</section>
    )
}

export default Home