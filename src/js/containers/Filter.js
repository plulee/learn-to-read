import { connect } from "react-redux";
import FilterComponent from "../components/Filter";

const mapStateToProps = state => ({
    loadingIndicator: state.loading.loadingIndicator,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (loadingIndicator) => {
        dispatch(loading(loadingIndicator));
    },
});

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterComponent);

export default Filter;
