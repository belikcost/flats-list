import { useEffect } from "react";
import { connect } from "react-redux";

import { addFavoriteFlat, getFlatsRequest } from "../redux/actions";

import { App } from "../components/App";


const AppContainer = ({flats, onGetFlatsRequest, favorites}) => {

    useEffect(() => {
        if (!flats) {
            onGetFlatsRequest();
        }
    }, [flats, onGetFlatsRequest]);
    
    return (
        <App
            flats={flats}
            favorites={favorites}
        />
    );
};

const mapStateToProps = (state) => ({
    flats: state.flats,
    favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
    onGetFlatsRequest: () => dispatch(getFlatsRequest()),
    onAddFavoriteFlat: (flat) => dispatch(addFavoriteFlat(flat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);