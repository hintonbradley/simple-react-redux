import React from 'react';
import './Designs.css';
import ReactStructure from '../../src/img/ReactStructure.jpg';
import ReduxStructure from '../../src/img/ReduxStructure.jpg';
import ReactReduxStructure from '../../src/img/ReactReduxStructure.jpg';

function Designs() {
    return (
        <div className="Designs landing-page">
            <div className="card react-structure">
                <div className="txt">
                    <h1 className="center">React Structure</h1>
                    <p>Since we are using Redux with this app, most of the state we are going to use will be handled by Redux instead of by React class-based components. Therefore, we will be mostly using functional components and not class based components.</p>
                    <p>In regards to the functionality of the application, will need the following:</p>
                    <ul>
                        <li>App components to return a song list down to the SongList component</li>
                        <li>The SongList components will return a selected song up to the App component</li>
                        <li>The App components will return the selected down to the SongDetail component</li>
                    </ul>
                </div>
                <img className="img-sm center" src={ReactStructure} alt="React Structure" /> 
            </div>
            <div className="card redux-structure">
                <div className="txt">
                <h1 className="center">Redux Structure</h1>
                    <p>Since props are <b>NOT</b> going to be used to pass data down to child components, we instead will abstract out all the functionality of our app using Redux. Therefore, using Redux, we will creating the following:</p>
                    <ul>
                        <li><b>Reducer</b> to return a song list</li>
                        <li><b>Reducer</b> to return the current selected song</li>
                        <li><b>Action Creator</b> to select a song</li>
                    </ul>
                </div>
                <img className="img-md txt-c" src={ReduxStructure} alt="Redux Structure" /> 
            </div>
            {/* <h1>React Structure (right)</h1>
            <p>Since we are using Redux with this app, most of the state we are going to use will be handled by React instead of the React class-based components.</p>
            <img className="img-sm" src={Img1} />  */}
            <div className="card react-redux-structure">
                <div className="txt">
                    <h1 className="center">React-Redux Structure</h1>
                    <p>A few things to note:</p>
                    <ul>
                        <li>The Redux Store contains our application's State and all the Redux Reducers</li>
                        <li>We'll need to create instances of two new components <b>(Provider</b> and <b>Connect)</b> - both components implemented by React-Redux library.</li>
                    </ul>
                    <img className="img-md" src={ReactReduxStructure} alt="React-Redux Structure" />
                    <p>Using the React-Redux library, we will be able to connect Redux to our React app by doing the following:</p>
                    <ol>
                        <li>We'll pass props into both the <b>Provider</b> and <b>Connect</b> components to configure them for our application.</li>
                        <li>The <b>Provider</b> component will be rendered at the top of the hierarchy of our app (basically wrapping our whole app inside it), so the provider will have access to our React store.</li>
                        <li>We'll wire up every component that needs to access our State (inside the React Store), and wrap each component inside a Connect component. (Connect component can communicate with the Provider component through Redux via the Context System - even if there are multiple other components between them-see image).</li>
                        <li>We then configure each Connect component to be able to make requests (through specific Action Creators) up through the Provider and be able to have the Provider send data back down to each component through React-Redux library.</li>
                    </ol>
                </div>
            </div>
            
        </div>
    );
}

export default Designs;