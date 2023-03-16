import { connect } from "react-redux";
import { compose } from "redux";
import { mapStateToProps, mapDispatchToProps } from "./maps";

import HomeContainer from "./component";

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeContainer);
