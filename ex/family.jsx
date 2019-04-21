import React from 'react';
import { childrenWithProps } from "../utils/reactUtils";

export default props => (
    <div>
        { childrenWithProps(props) } 
    </div>
)