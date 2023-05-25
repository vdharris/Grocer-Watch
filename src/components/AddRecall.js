import { useState } from 'react';
import React from 'react';


const AddRecall = () => {
    const [recalling_firm, setFirm] = useState('')
    const [report_date, setDate] = useState('')
    const [product_description, setProduct] = useState('')
    const [error, setError] = useState(null)

//recalling_firm, report_date, product_description
const handleSubmit = async (e) => {
    e.preventDefault();
    const recalling  = {recalling_firm, report_date, product_description}
    const response = await fetch('http://localhost:3000/api/food/',{
        method: 'POST',
        body: JSON.stringify(recalling),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json();

    if(response.ok){
        setFirm('');
        setDate('');
        setProduct('');
        setError(null);
        console.log('new recall', json)
    }else{setError(json.error)}
}


    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add New Recall</h3>
            <label>Manufacturer</label><br/>
            <input type="text" onChange={(e) => setFirm(e.target.value)} value={recalling_firm}/><br/>
            
            <label>Date (YYYYMMDD)</label><br/>
            <input type="text" onChange={(e) => setDate(e.target.value.toString())} value={report_date}/><br/>
            
            <label>Product Info</label><br/>
            <input type="text" onChange={(e) => setProduct(e.target.value)} value={product_description}/><br/>
            <button>Submit Recall</button>
        </form>
    )

}
export default AddRecall;