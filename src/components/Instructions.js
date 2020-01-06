import React from 'react';
import Instruction from '../components/Instruction';

function Instructions() {
    return (
        <div className="Intro landing-page">

            < Instruction card="light" obj={[
                {type:'text',text:'Step 1: Create your app.'},
                {type:'image',text:'Create App',name:'createApp',classes:'img-md center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 2: Install Redux and React-Redux (has helper functions so React and Redux can talk to each other)'},
                {type:'text',text:'$ npm install --save redux react-redux'},
                {type:'image',text:'Install React-Redux',name:'installRR',classes:'img-lg center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 3: Run your server.'},
                {type:'text',text:'$ npm start'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 4: Create Root index.js file in the /src folder. We will set up React and Redux to interact with the application in this file.'},
                {type:'image',text:'Index Root',name:'indexRoot',classes:'img-md center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 5: Create App.js file using a functional component.'},
                {type:'image',text:'App Component',name:'appComponent',classes:'img-sm center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 6: Organize your folder structure using the following example:'},
                {type:'text',text:'Note: File inside the /actions and /reducers folders are normally named index.js by convention.'},
                {type: 'header',text:'Folder Structure'},
                {type:'image',text:'Folder Structure',name:'folderStructure',classes:'img-sm center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 7: Create the Action Creator file. For all Action Creators we add a folder inside the /src folder named /\'actions/\' and name the file \'index.js\'. (See red arrow)'},
                {type:'text',text:'Finally, we add a \'type\' and \'payload\' to each Action Creator and export as one file (not each individual Action Creator file).'},
                {type:'image',text:'Action Creator',name:'actionCreator',classes:'img-md center'}
            ]} />

            < Instruction card="dark" obj={[
                {type:'text',text:'Sidenote: Import the Action Creator.'},
                {type:'text',text:'Note: In the /actions/index.js file we are exporting each individual Action Creator (export const selectSong), and NOT exporting the whole file at the bottom (export default { name } ).'},
                {type:'image',text:'Named Export Action Creator',name:'namedExportAC',classes:'img-md center'},
                {type:'text',text:'Since we have used the naming export technique in the Action Creator file (export const selectSong), we now import the Action Creator by referencing the specific name (import { selectSong } from... ).'},
                {type:'image',text:'Named export app file',name:'namedExportAppFile',classes:'img-md center'},
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 8: We create all the Reducers in one file (/src/reducers/index.js), but not as exports. All Reducers will be stored inside the React Store. For a refresher on Reducers, click below:'},
                {type:'link',text:'Refresher on Action Creators',link:'https://jhb-redux.netlify.com/#reducers'},
                {type:'image',text:'Reducers',name:'reducers',classes:'img-lg center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 9: Import the combineReducers method from Redux into the /src/reducers/index.js file and combine your Reducers.'},
                {type:'image',text:'Combining reducers',name:'combiningReducers',classes:'img-md center'}
            ]} />

            < Instruction card='light' obj={[
                {type: 'text', text: 'Step 10: In the /src/index.js file, import the following:'},
                {type: 'list', listItems: ['Provider component from React-Redux','createStore method from Redux','reducers file from your app']},
                {type: 'image', text:'Index imports', name:'indexImport',classes:'img-md center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 11: Wrap the App component with the React-Redux Provider component.'},
                {type:'image',text:'Provider',name:'Provider',classes:'img-md center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 12: Pass in the store as a prop to the Provider component. We are using the createStore method and including our reducers as an argument to create our Redux Store.'},
                {type:'image',text:'Redux store',name:'store',classes:'img-md center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text',text:'Step 13: Create components that will need to be wired up to the Redux Store (via the Provider Component) and import them into your main application component (in this case, the Home component)'},
                {type:'image',text:'Song List',name:'songList',classes:'img-sm center'},
                {type:'image',text:'Import Home Component',name:'importHome',classes:'img-sm center'}
            ]} />

            < Instruction card="light" obj={[
                {type:'text', text:'Step 14: For components that need access to state in the Redux Store, create an instance of the React-Redux Connect component to wrap each component. So, in each component that needs access, import the connect component from React-Redux library, and wrap the component within it.'},
                {type:'image',text:'Connect Component',name:'connectComponent',classes:'img-md center'}]} />

            < Instruction card='dark' obj={[
                {type:'text', text:'Sidenote: Connect component instance.'},
                {type:'text', text:'Note: The syntax to creating an instance of the Connect component, we need to write it in a very specific way, but still valid Javascript code.'},
                {type:'text', text:'In the image below, you can see a function call that returns a function (that isn\'t called)'},
                {type:'image', text:'Connect Instance 1',name:'connectInstance1', classes:'img-md center'},
                {type:'text', text:'Now if we look at the code below, the extra set of parenthesis (along with the argument for the returned function) calls the returned function. You can see in the console to the right that this is valid Javascript code.'},
                {type:'image', text:'Connect Instance 2',name:'connectInstance2', classes:'img-md center'},
            ]} />

            < Instruction card="light" obj= {[
                {type:'text',text:'Step 15: Pass configuration to the Connect Component so it will constantly listen to ensure we can get up-to-date and correct data this component needs from our Redux Store (via the Provider).'},
                {type:'text',text:'We first create a new method (by convention called the \'mapStateToProps\'), and call it using \'state\' from the Redux Store as an argument. Console.log state to view in console to confirm it\'s working, and return state once we\'re finished.'},
                {type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'mapStateToProps', alt: 'Connect Instance 1'},
                {type:'text',text:'Finally, we configure the connect function using this new mapStateToProps method as an argument in order to allow it to get the Redux State through the Provider component.'},
                {type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectMethod', alt: 'Connect Instance 1'}
            ]} />

            < Instruction card='dark' obj= { [
                {type:'text',text:'Sidenote: The connect() method breakdown'},{type:'text',text:'The mapStateToProps method in the connect method returns a object of State from the Redux Store. The mapStateToProps method will take the State object (ALL of the data inside the Redux Store - i.e. all the songs AND the current selected song) and we\'re going to run a calculation that will make the data show up as props inside our (SongList) component.'},
                {type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectMapStateToProps', alt: 'Connect-mapStateToProps method'},
                {type:'text',text:'The connect function will return a \'wrapper function\' that will take a component as an argument when being (usually) immediatly invoked.'},
                {type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectReturns', alt: 'Connect returns'},
                {type:'text',text:'The component is being used as an argument for the function the connect function returns. This component will end up being wrapped by the connect function and will receive the State that is returned from the mapStateToProps function as props.'},
                {type:'image',text:'Connect-mapStateToProps method',classes:'img-md center', name:'connectwrapperComponent', alt:'Connect Component'}]}/>
            
            <Instruction card='light' obj= { [{type:'text',text:'Step 16: In the SongList component, edit the mapStateToProp function so the component only receives the state it needs from the Redux Store.'},{type: 'image', text:'This is an image', classes:'img-md center', name:'songsListProps', alt: 'Connect Instance 1'},{type: 'text', text:'The songs list now shows up as a component INSIDE the Song List Component (as seen in console).'}] } />

            <Instruction card="light" obj={[{
                type: 'text', text: 'Step 17: Create a list of songs to be displayed in teh UI. We first create a helper function to create out all the JSX using a map method on the song list we obtained from the State in the Redux Store.'},
                {type:'text',text:'The first return statement in the helper function will return the completed array of JSX elements that the map method returns. The second return statement will return each of the JSX elements in the new map array.'},
                {type:'image',text:'Displaying JSX list',name:'listItems',classes:'img-xl center'}
            ]} />

            <Instruction card="light" obj={[{
                type: 'text', text: 'Step 18: We now need to import and wire up our Action Creator in order to be able to change the selected song when a song is clicked, and update it in the Redux store. So we first need to import the Action Creator...'},
                {type:'image',text:'Import Action Creator',name:'importAC',classes:'img-md center'},
                {type: 'text', text: 'We now need to pass the imported Action Creator into our Connect function as a second argument (as an object) so it can communicate with the Redux Store. Note: Since the key and value are identical, we can simply say "selectSong" in the object and it will be used as both key and value. Additionally, now selectSong will be passed in as a prop to our component.'},
                {type:'image',text:'Wiring up Action Creator',name:'wiringAC',classes:'img-lg center'}
            ]} />

            <Instruction card = 'light' obj={[{
                type: 'text', text: 'Step 19: We now need to add the functionality to our UI. So we add a click method to all the song buttons in our song list, so when a specific button is clicked, the corresponding song will be the current selected song.'},
                {type:'image',text:'Adding AC functionality',name:'addingACFunctionality',classes:'img-lg center'},
                {type:'text', text:'Note: Add a console.log to your mapStateToProps function to ensure state is being updated onClick.'},
                {type:'image',text:'Verify AC Funcionality',name:'verifyACFunctionality',classes:'img-lg center'},
            ]} />
            <Instruction card = 'light' obj={[{
                type: 'text', text: 'Step 20(kinda): Follow steps 13-16 to create a new component that will display the selected song information.'},
                {type:'image',text:'Song Detail Component',name:'songDetailComponent',classes:'img-md center'},
            ]} />
            <Instruction card = 'light' obj={[{
                type: 'text', text: 'Step 21: Add the SongDetail component to your main component.'},
                {type:'image',text:'Song Detail Component',name:'addSongDetail',classes:'img-md center'},
            ]} />
            <Instruction card = 'light' obj={[{
                type: 'text', text: 'Step 22: Clean up the SongDetails component to display infomration.'},
                {type: 'text', text: 'First, instead of receiving the entire props object in our SongDetail component (as props) we destructurize the property or properties we care about.'},
                {type:'image',text:'Destructuring props',name:'destructureProps',classes:'img-md center'},
                {type: 'text', text: 'Second, add a check to see if there is a song being returned (and not null). If it is null, let user know they need to select a song. Otherwise, list the song details that is returned from the Redux Store.'},
                {type:'image',text:'Selected Song Check',name:'selectedSongCheck',classes:'img-md center'}
            ]} />
        </div>
    );
}

export default Instructions;