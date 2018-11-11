import { connect } from "react-redux";
import DropdownComponent from "../components/Dropdown";
import { addFilter, removeFilter} from "../actions";

const mapDispatchToProps = (dispatch) => ({
    addFilter: (feature, filterType) => {
        dispatch(addFilter(feature, filterType));
    },
    removeFilter: (feature, filterType) => {
        dispatch(removeFilter(feature, filterType));
    }
});

const Dropdown = connect(() => ({}), mapDispatchToProps)(DropdownComponent);

export default Dropdown;
