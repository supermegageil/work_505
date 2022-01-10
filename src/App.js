import './css/style.css';
import {Route} from 'react-router-dom';

//commen
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//main
import Brand from './components/main/Brand.js';
import Info from './components/main/Info.js';
import Project from './components/main/Project.js';
import Story from './components/main/Story.js';
import Visual from './components/main/Visual.js';


//sub
import Department  from './components/sub/Department.js';
import Community  from './components/sub/Community.js';
import Gallery  from './components/sub/Gallery.js';
import Youtube  from './components/sub/Youtube.js';
import Location  from './components/sub/Location.js';
import Join  from './components/sub/Join.js';

function App() {
  return (
    <div className="App">
      <Header />
         
      <Route exact path="/" component={Visual} />
      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/join" component={Join}></Route>      

      <Footer />
    </div>
  );
}

export default App;
