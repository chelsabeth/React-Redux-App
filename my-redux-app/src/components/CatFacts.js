import React from "react";
import { connect } from "react-redux"; // bridge/connecting peice between react and redux

const CatFacts = (props) => {
    return (
        <div>

        </div>
    );
}

const mapStateToProps = state => {
    return {
        catFacts: state.catFacts
    }
}

export default connect(mapStateToProps, {})(CatFacts);