import { connect } from "react-redux";
import LettersComponent from "../components/Letters";
import { puzzleSolved } from "../actions";

const mapDispatchToProps = (dispatch) => ({
    puzzleSolved: () => {
        dispatch(puzzleSolved());
    },
});

const Letters = connect(() => ({}), mapDispatchToProps)(LettersComponent);

export default Letters;
