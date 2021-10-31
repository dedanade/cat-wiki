import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import ViewBreed from './Components/ViewBreed';
import TopBreeds from './Components/TopBreeds';
import LoadingCat from './Components/Common/LoadingCat';

function App() {
  return (
    <BrowserRouter>
      <main className='container'>
        <Switch>
          <Route path='/breed/:breedName' component={ViewBreed} />
          <Route path='/loading' component={LoadingCat} />
          <Route path='/top-breeds' component={TopBreeds} />
          <Route path='/' component={Homepage} />
          <Redirect to='/' />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
