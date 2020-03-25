import React from 'react'
import Banner from '../Components/Banner';
import RewardsSignUp from '../Components/RewardsSignUp'

function Rewards() {
    return (
        <React.Fragment>
            <Banner idname="jumbotron-contact" header="Join Our Rewards" />
            <RewardsSignUp />
        </React.Fragment>
    )
}

export default Rewards
