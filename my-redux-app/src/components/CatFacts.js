import React from "react";
import { connect } from "react-redux"; // bridge/connecting peice between react and redux

import Fact from "./Facts"

  {/* handle all possible state in JSX:
            1) initial state
            2) sucess state
            3) loading state
            4) error state */}

const CatFacts = props => {
    if (props.isFetching) {
        return <h2>Loading Cat Facts...</h2>
    } // handles loading state
    return (
        <div>
            {props.state && <p>{props.error}</p>} {/* handles error state */}
            {props.catFacts.map(fact => (
                <Fact key={fact._id}/>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        catFacts: state.catFacts,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(CatFacts);