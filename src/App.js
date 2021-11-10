import axios  from "axios";
import Hotel from './Components/Hotel'
import Kisumu from './Components/Kisumu'
import Mombasa from './Components/Mombasa'
import Navbar from "./Components/Navbar";
import { Route, Switch } from 'react-router';

function App() {


  return (
    <div style={{ width: '100vw', margin: 'auto', backgroundColor: 'whitesmoke' }} >


<Navbar/>
<Hotel/>
<Kisumu/>
<Mombasa/>



  
{/* <Route path="/nairobi" component={Hotel}></Route>
<Route path="/kisumu" component={Kisumu}></Route>
<Route path="/mombasa" component={Mombasa}></Route> */}

    </div>
  );
}

export default App;
