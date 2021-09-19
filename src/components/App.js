import { Link, Route, Switch } from "react-router-dom";
import { Container, Navbar, Spinner } from "react-bootstrap";

import FlatContainer from "../containers/FlatContainer";

import { Flat } from "./Flat";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'


export const App = ({flats, favorites}) => {

    return (
        <div className="app">
            <header>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">Главная</Link>
                        </Navbar.Brand>
                        <Navbar.Text>
                            <Link to="/favorites">Понравившиеся</Link>
                        </Navbar.Text>
                    </Container>
                </Navbar>
            </header>
            <Container>
                <Switch>
                    <Route exact path="/">
                        {flats ? (
                            <div className="flats-list">
                                {flats.map(flat => (
                                    <FlatContainer flat={flat} key={flat.id}/>
                                ))}
                            </div>
                        ) : (
                            <Spinner className="app_loading" animation="border" variant="primary" />
                        )}
                    </Route>
                    <Route exact path="/favorites">
                        {favorites ? (
                            <div className="flats-list">
                                {favorites.length !== 0 ? favorites.map(flat => (
                                    <Flat flat={flat} key={flat.id}/>
                                )) : (
                                    <p>Понравившиеся квартиры отсутствуют</p>
                                )}
                            </div>
                        ) : (
                            <Spinner className="app_loading" animation="border" variant="primary" />
                        )}
                    </Route>
                </Switch>
            </Container>
        </div>
    );
}