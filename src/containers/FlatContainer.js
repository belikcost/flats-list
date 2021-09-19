import { connect } from "react-redux";

import { addFavoriteFlat } from "../redux/actions";

import { Flat } from "../components/Flat";


const FlatContainer = ({flat, favorites, onAddFavoriteFlat}) => {

    const handleAddFavorite = () => {
        onAddFavoriteFlat(flat);
    };

    return (
        <Flat
            flat={flat}
            favorites={favorites}
            handleAddFavorite={handleAddFavorite}
        />
    );
}

const mapStateToProps = (state) => ({
    favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) => ({
    onAddFavoriteFlat: (flat) => dispatch(addFavoriteFlat(flat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatContainer);