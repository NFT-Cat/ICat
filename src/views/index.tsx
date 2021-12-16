import {Container, Wrap} from './styles';
import {Route,Switch,Redirect} from "react-router-dom";

import Home from './Home';
import Landing from './Landing';
import Mobile from './Mobile';
import Swap from './swap';
import WaWa from './WaWa'
export default () => {
    return (
        <Wrap>
            <Container className="container">
                <Switch>
                    <Route exact path="/cat"  render={()=> <Home />}/>
                    <Route exact path="/swap"  render={()=> <Swap />}/>
                    <Route exact path="/"  render={()=> <Landing />}/>
                    <Route exact path="/mobile"  render={()=> <Mobile />}/>
                    <Route exact path="/wawa"  render={()=> <WaWa />}/>

                </Switch>
                {/*<Route path="/swap/exchange" render={() => <SwapExchangeWrap />} />*/}
            </Container>
        </Wrap>
    )
};
