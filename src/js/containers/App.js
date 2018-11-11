import { connect } from "react-redux";
import AppComponent from "../components/App";

const mapStateToProps = state => ({
    pointsCount: state.points.pointsCount,
});

const App = connect(mapStateToProps, () => ({}))(AppComponent);

export default App;
