import {Container, Wrap} from './styles';
import {Route,Switch,Redirect} from "react-router-dom";

import Home from './Home';
import Landing from './Landing'
export default () => {
    return (
        <Wrap>
            <Container className="container">
                <Switch>
                    <Route exact path="/cat"  render={()=> <Home />}/>
                    <Route exact path="/"  render={()=> <Landing />}/>
                </Switch>
                {/*<Route path="/swap/exchange" render={() => <SwapExchangeWrap />} />*/}
            </Container>
        </Wrap>
    )
};
