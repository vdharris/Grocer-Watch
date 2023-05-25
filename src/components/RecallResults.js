import React, { Component } from "react";

const RecallResults = ({ value, index }) => {

    const { _id, report_date, recalling_firm, product_description } = value;
    const product_description2 = product_description.slice(0, 150);
    const report_date2 = `${report_date.slice(0, 4)}-${report_date.slice(4, 6)}-${report_date.slice(6, 8)}`

    const handleClick = async () => {
        const response = await fetch('http://localhost:3000/api/food/' + _id, {
            method: 'DELETE',
        })
        const json = await response.json();
        if (response.ok) {
            console.log('deleted response', json)
        } else {
            console.log(json.error)
        }
    }



    return (
        <div className='recallItem'>
            <div className="topRecallItem">
                <p id='firm'>{index}{recalling_firm}</p>
                <button onClick={handleClick}>Delete</button>
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
export default RecallResults;