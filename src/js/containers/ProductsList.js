import { connect } from "react-redux";
import ProductsListComponent from "../components/ProductsList";

const mapStateToProps = state => ({
    filters: state.filters,
    loadingIndicator: state.loading.loadingIndicator,
});

const ProductsList = connect(mapStateToProps, () => ({}))(ProductsListComponent);

export default ProductsList;
