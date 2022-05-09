
// import './App.css';
import AudioDescription from './AudioDescription/AudioDescription';
import Body from './Body/Body';
import Header from './Header/Header';
import ContextState from './ContextApi/ContextState';

function App() {
  return (
 <>
 <ContextState>
 <Header/>
 <AudioDescription/>
 <Body/>
 </ContextState>
 </>
  )
}

export default App;
