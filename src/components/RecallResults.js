import React, { Component } from "react";

class RecallResults extends Component {



render(){
    const { report_date, recalling_firm, product_description} = this.props.value;
    return (
        <div className='recallItem'>
            In Recall Results
            <p id='date'>{report_date}</p>
            <p id='firm'>{recalling_firm}</p>
            <p id='product_info'>{product_description}</p>
        </div>
    )
}
}
export default RecallResults;