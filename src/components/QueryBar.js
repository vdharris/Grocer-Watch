import React, { Component } from 'react';
import RecallResults from './RecallResults';
import StoreButton from './StoreButton'


class QueryBar extends Component {
  
  
//   handleClick = async () => {
//     try {
//         const data = await (await fetch(`https://api.fda.gov/food/enforcement.json?search=recalling_firm:%22target%20corporation%22&sort=report_date:desc&limit=10`)).json();
//         console.log(data);
//         setData(data);
//     } catch (err) {
//         console.log(err.message)
//     }
// }
constructor(props) {
  super(props);
  this.state = {
    url: 'https://api.fda.gov/food/enforcement.json?sort=report_date:desc&limit=5',
    recalls: [],
    stores: ['target','kroger','aldi','walmart','publix','costco','whole foods','albertsons','dollar general','trader joe'],
  };
  this.findRecall = this.findRecall.bind(this);
}

//create fetch request for server items and update the this.state with the items fetched into the urls array
componentDidMount() {
  fetch(this.state.url)
  .then( response => response.json())
  .then((data) => {
    // console.log(data);
    this.setState({
      recalls: data.results
    });
  })
}

componentDidUpdate(prevProps, prevState){
  if(prevState.url !== this.state.url){
    fetch(this.state.url)
    .then( response => response.json())
    .then((data) => {
      // console.log(data);
      this.setState({
        recalls: data.results
      });
    })
  }
}

  findRecall(store){
    console.log(`You hit button for ${store}`);
    if(store === 'target'){
      this.setState({
        url: 'https://api.fda.gov/food/enforcement.json?search=recalling_firm:%22target%20corporation%22&sort=report_date:desc&limit=5'
      })
      // console.log(this.state.url);
    }
    if(store === 'whole foods'){
      this.setState({
        url: 'https://api.fda.gov/food/enforcement.json?search=recalling_firm:%22whole%20foods%20market%22&sort=report_date:desc&limit=5'
      })
      // console.log(this.state.url);
    }
  }
  
  
  render() {
    const buttons = [];

    const items = [];
      for (let i = 0; i < this.state.recalls.length; i++){
        // console.log(this.state.recalls[i]);
        items.push(<RecallResults key={`item${i}`} value={this.state.recalls[i]} />);
      }
    

    return (
      <div className='queryBarContainer'>
        {/* {items} */}
        <h2>QueryBar Finally Here!</h2>
        <div className='storesContainer'>
          {/* <select id="stores">
            <option value="target corporation">Target</option>
            <option value="whole foods market">Whole Foods</option>
          </select> */}
          <button type='button' className='storeButton'
          onClick={() => this.findRecall('target')}>Target</button>
          <button type='button' className='storeButton'
          onClick={() => this.findRecall('whole foods')}
          >Whole Foods</button>
          {/* {this.state.stores.map((val,index) =>{
            <StoreButton key={`storebutton${index}`} value={val}></StoreButton>
          })} */}
        </div>
        <div className='recallFeed'>
        {items}
        </div>
      </div>
    );
  }
}
export default QueryBar;