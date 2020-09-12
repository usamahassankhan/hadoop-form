import React from 'react';
import fire from '../../firebase';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <br />
            <br />
            <br />
            <button onClick = {fire.auth().signOut()}>SignOut</button>
        </div>
    )
}

export default Home
