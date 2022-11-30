import React from 'react'
import { BuyProducts } from '../BuyProducts/BuyProducts'
import { Router, Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'
import './App.css'
import { createBrowserHistory } from 'history'
import { Payed } from '../Payed/Payed'
const history = createBrowserHistory()
//redirectUrl="http://localhost:3000/payed/hg87ghdjfgdj9"
export const App = (props) => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route
                        path='/'
                        exact
                        component={() => (
                            <div>
                                <div>Welcome to e-commerce</div>
                                <div>
                                    <Link to='/buy'>Press here to Buy</Link>
                                </div>
                            </div>
                        )}
                    />
                    <Route path='/buy' component={BuyProducts} exact />
                    <Route
                        path='/payed/:id'
                        component={({ match }) => {
                            return <Payed id={match.params.id} />
                        }}
                        exact
                    />
                </Switch>
            </Router>
        </div>
    )
}
