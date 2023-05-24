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
      stores: ['Target', 'Kroger', 'Aldi', 'Walmart', 'Publix', 'Costco', 'Whole Foods', 'Albertsons', 'Dollar General', 'Trader Joe', 'Recent Recalls'],
    };
    this.findRecall = this.findRecall.bind(this);
    console.log('construction')
  }

  //create fetch request for server items and update the this.state with the items fetched into the urls array
  componentDidMount() {
    fetch(this.state.url)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          recalls: data.results
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      fetch(this.state.url)
        .then(response => response.json())
        .then((data) => {
          // console.log(data);
          this.setState({
            recalls: data.results
          });
        })
    }
  }

  findRecall(store) {
    console.log(`You hit button for ${store}`);
    if (store !== 'Recent Recalls') {
      this.setState({
        url: `https://api.fda.gov/food/enforcement.json?search=distribution_pattern:${store}&sort=report_date:desc&limit=25`
      })
      // console.log(this.state.url);
    }else{
      this.setState({
        url: 'https://api.fda.gov/food/enforcement.json?sort=report_date:desc&limit=50'
      })
    }
  }


  render() {
    const buttons = [];
    this.state.stores.forEach(ele =>
      buttons.push(
        <button type='button' className='storeButton' onClick={() => this.findRecall(ele)}>{ele}</button>
      )
    );

    const items = [];
    for (let i = 0; i < this.state.recalls.length; i++) {
      // console.log(this.state.recalls[i]);
      items.push(<RecallResults key={`item${i}`} value={this.state.recalls[i]} />);
    }


    return (
      <div className='queryBarContainer'>
        {/* {items} */}
        <h2>Store Selector</h2>
        <div className='storesContainer'>
          {buttons}
        </div>
        <div className='recallFeed'>
          {items}
        </div>
      </div>
    );
  }
}
export default QueryBar;