import React, { Component } from "react";

class RecallResults extends Component {



    render() {
        const { report_date, recalling_firm, product_description } = this.props.value;
        const product_description2 = product_description.slice(0, 150);
        const report_date2 = `${report_date.slice(0, 4)}-${report_date.slice(4, 6)}-${report_date.slice(6, 8)}`
        return (
            <div className='recallItem'>
                <p id='firm'>{recalling_firm}</p>
                <hr/>
                <p id='date'>Date of recall: {report_date2}</p>
                <p id='product_info'>Food Info:<br />{product_description2}</p>
            </div>
        )
    }
}
export default RecallResults;