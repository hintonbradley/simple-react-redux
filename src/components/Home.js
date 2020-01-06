import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

function Home() {
    return (
        <div className="Home landing-page">
            <div className="ui container grid">
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />
                    </div>
                    <div>
                        <SongDetail />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;