import React, { Component } from "react";

class RecallResults extends Component {

    // constructor(){
    //     this.state = {

    //     }
    // }


    render() {
        const { _id, report_date, recalling_firm, product_description } = this.props.value;
        const product_description2 = product_description.slice(0, 150);
        const report_date2 = `${report_date.slice(0, 4)}-${report_date.slice(4, 6)}-${report_date.slice(6, 8)}`
        return (
            <div className='recallItem'>
                <div className="topRecallItem">
                    <p id='firm'>{this.props.index}{recalling_firm}</p>
                    <button onClick={() => handleClick}>Delete</button>
                </div>
                <hr />
                <div className="botRecallItem">
                    <div>
                        <p id='date'>Date of recall: {report_date2}</p>
                        <p id='product_info'>{product_description2}</p>
                    </div>
                    <p id='identifier'>{_id}</p>
                </div>
            </div>
        )
    }
}
export default RecallResults;