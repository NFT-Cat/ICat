import {Container, Wrap} from './styles';
import {NavBar,Header} from '@/components';
import {Route,Switch,Redirect} from "react-router-dom";

import Home from './Home';
import Landing from './Landing'
export default () => {
    return (
        <Wrap>
            <Container className="container">
                <Switch>
                    <Route exact path="/"  render={()=> <Home />}/>
                    <Route exact path="/landing"  render={()=> <Landing />}/>
                </Switch>
                {/*<Route path="/swap/exchange" render={() => <SwapExchangeWrap />} />*/}
            </Container>
        </Wrap>
    )
};
