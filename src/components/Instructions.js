import React from 'react';
import Instruction from '../components/Instruction';
import Img1 from '../../src/img/folderStructure.jpg';
import actionCreator from '../../src/img/actionCreator.jpg';
import reducers from '../../src/img/reducers.jpg';
import createApp from '../../src/img/createApp.jpg';
import installRR from '../../src/img/installRR.jpg';
import indexRoot from '../../src/img/indexRoot.jpg';
import appComponent from '../../src/img/appComponent.jpg';
import namedExportAppFile from '../../src/img/namedExportAppFile.jpg';
import namedExportAC from '../../src/img/namedExportAC.jpg';
import combiningReducers from '../../src/img/combiningReducers.jpg';
import indexImports from '../../src/img/indexImport.jpg';
import provider from '../../src/img/Provider.jpg';
import store from '../../src/img/store.jpg';
import songList from '../../src/img/songList.jpg';
import importHome from '../../src/img/importHome.jpg';
import connectComponent from '../../src/img/connectComponent.jpg';
import connectInstance1 from '../../src/img/connectInstance1.jpg';
import connectInstance2 from '../../src/img/connectInstance2.jpg';
import connectMapStateToProps from '../../src/img/connectMapStateToProps.jpg';
import connectReturns from '../../src/img/connectReturns.jpg';
import connectWrapperComponent from '../../src/img/connectwrapperComponent.jpg';
// import songsListProps from '../../src/img/songsListProps.jpg';

function Instructions() {
    return (
        <div className="Intro landing-page">
            <div className="card card-light">
                <div className="txt">
                    <p>Step 1: Create your app.</p>
                </div>
                <img className="img-md center" src={createApp} alt="Create App" />
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 2: Install Redux and React-Redux (has helper functions so React and Redux can talk to each other).</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;$ npm install --save redux react-redux</p>
                </div>
                <img className="img-lg center" src={installRR} alt="Install React-Redux"/>
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 3: Run your server.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;$ npm start</p>
                </div>
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 4: Create Root index.js file in the /src folder. We will set up React and Redux to interact with the application in this file.</p>
                </div>
                <img className="img-md center" src={indexRoot} alt="Index Root" />
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 5: Create App.js file using a functional component.</p>
                </div>
                <img className="img-sm center" src={appComponent} alt="App Component" />
            </div>
            <div className="card  card-light">
                <div className="txt">
                    <p>Step 6: Organize your folder structure using the following example:</p>
                    <p>Note: File inside the <b>/actions</b> and <b>/reducers</b> folders are normally named index.js by convention.</p>
                </div>
                <h3 className="center">Folder Structure</h3>
                <img className="img-sm center" src={Img1} alt="Folder Structure" /> 
            </div>
            <div className="card  card-light">
                <div className="txt">
                    <p>Step 7: Create the Action Creator file. For all Action Creators we add a folder inside the /src folder named 'actions' and name the file 'index.js'. (See red arrow)</p>
                    <p>Finally, we add a 'type' and 'payload' to each Action Creator and export as one file (not each individual Action Creator file).</p>
                </div>
                <img className="img-md center" src={actionCreator} alt="Action Creator" />
            </div>
            <div className="card  card-dark">
                <div className="txt">
                    <p>Sidenote: Import the Action Creator.</p>
                    <p>Note: In the /actions/index.js file we are exporting each individual Action Creator (export const <b>selectSong</b>), and NOT exporting the whole file at the bottom (export default &lt;name&gt;).</p>
                </div>
                <img className="img-md center" src={namedExportAC} alt="Named Export Action Creator" />
                <div className="txt">
                    <p>Since we have used the naming export technique in the Action Creator file (export const <b>selectSong</b>), we now import the Action Creator by referencing the specific name (import &#123;selectSong&#125; from... ).</p>
                </div>
                <img className="img-md center" src={namedExportAppFile} alt="Named export app file" />
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 8: We create all the Reducers in one file (/src/reducers/index.js), but not as exports. All Reducers will be stored inside the React Store.</p>
                    <p>For a refresher on Action Creators, click <a href="https://jhb-redux.netlify.com/#reducers">here</a>.</p>
                </div>
                <img className="img-lg center" src={reducers} alt="Reducers" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 9: Import the combineReducers method from Redux into the /src/reducers/index.js file and combine your Reducers.</p>
                </div>
                <img className="img-md center" src={combiningReducers} alt="Combining reducers" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 10: In the /src/index.js file, import the following:</p>
                    <ul>
                        <li>Provider component from React-Redux</li>
                        <li>createStore method from Redux</li>
                        <li>reducers file from your app</li>
                    </ul>
                </div>
                <img className="img-md center" src={indexImports} alt="Index imports" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 11: Wrap the App component with the React-Redux Provider component.</p>
                </div>
                <img className="img-md center" src={provider} alt="Provider" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 12: Pass in the store as a prop to the Provider component. We are using the createStore method and including our reducers as an argument to create our Redux Store.</p>
                </div>
                <img className="img-md center" src={store} alt="Redux Store" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 13: Create components that will need to be wired up to the Redux Store (via the Provider Component) and import them into your main application component (in this case, the Home component).</p>
                </div>
                <img className="img-sm center" src={songList} alt="Song List" /> 
                <img className="img-sm center" src={importHome} alt="Import Home Component" /> 
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 14: For components that need access to state in the Redux Store, create an instance of the React-Redux Connect component to wrap each component. So, in each component that needs access, import the connect component from React-Redux library, and wrap the component within it.</p>
                </div>
                <img className="img-md center" src={connectComponent} alt="Connect Component" />
            </div>
            <div className="card  card-dark">
                <div className="txt">
                    <p>Sidenote: Connect component instance.</p>
                    <p>Note: The syntax to creating an instance of the Connect component, we need to write it in a very specific way, but still valid Javascript code.</p>
                    <p>In the image below, you can see a function call that returns a function (that isn't called)</p>
                </div>
                <img className="img-md center" src={connectInstance1} alt="Connect Instance 1" />
                <div className="txt">
                    <p>Now if we look at the code below, the extra set of parenthesis (along with the argument for the returned function) calls the returned function. You can see in the console to the right that this is valid Javascript code.</p>
                </div>
                <img className="img-md center" src={connectInstance2} alt="Connect Instance 2" />
            </div>
            <div className="card card-light">
                <div className="txt">
                    <p>Step 15: Pass configuration to the Connect Component so it will constantly listen to ensure we can get up-to-date and correct data this component needs from our Redux Store (via the Provider).</p>
                    <p>We first create a new method (by convention called the 'mapStateToProps'), and call it using 'state' from the Redux Store as an argument. Console.log state to view in console to confirm it's working, and return state once we're finished.</p>
                    <p>Finally, we configure the connect function using this new mapStateToProps method as an argument in order to allow it to get the Redux State through the Provider component.</p>
                </div>
                <img className="img-md center" src={connectInstance1} alt="Connect Instance 1" />
                <div className="txt">
                    <p>Now if we look at the code below, the extra set of parenthesis (along with the argument for the returned function) calls the returned function. You can see in the console to the right that this is valid Javascript code.</p>
                </div>
                <img className="img-md center" src={connectInstance2} alt="Connect Instance 2" />
            </div>

            < Instruction card='dark' obj= { [{type:'text',text:'Sidenote: The connect() method breakdown'},{type:'text',text:'The mapStateToProps method in the connect method returns a object of State from the Redux Store. The mapStateToProps method will take the State object (ALL of the data inside the Redux Store - i.e. all the songs AND the current selected song) and we\'re going to run a calculation that will make the data show up as props inside our (SongList) component.'},{type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectMapStateToProps', alt: 'Connect-mapStateToProps method'},{type:'text',text:'The connect function will return a \'wrapper function\' that will take a component as an argument when being (usually) immediatly invoked.'},{type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectReturns', alt: 'Connect returns'},{type:'text',text:'The component is being used as an argument for the function the connect function returns. This component will end up being wrapped by the connect function and will receive the State that is returned from the mapStateToProps function as props.'},{type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectwrapperComponent', alt:'Connect Component'}]} />
            
            <Instruction card='light' obj= { [{type:'text',text:'Step 16: In the SongList component, edit the mapStateToProp function so the component only receives the state it needs from the Redux Store.'},{type: 'image', text:'This is an image', classes:'img-md center', name:'songsListProps', alt: 'Connect Instance 1'},{type: 'text', text:'The songs list now shows up as a component INSIDE the Song List Component (as seen in console).'}] } />
        </div>
    );
}

export default Instructions;