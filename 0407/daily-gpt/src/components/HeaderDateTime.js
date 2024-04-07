import React from "react";
import * as common from '../assets/js/common'

export default function DateTime() {

    return (
        <div>
            <h6 style={{ height: "3px" }}>{common.formatDate(new Date())}</h6>
        </div>
    );
}
