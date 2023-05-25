import React, { Component } from 'react';
import RecallResults from './RecallResults';
import AddRecall from './AddRecall'
import { Link } from 'react-router-dom';


class QueryContainer extends Component {


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
      // url: 'https://api.fda.gov/food/enforcement.json?sort=report_date:desc&limit=10',
      url: 'http://localhost:3000/api/food/',
      recalls: [],
      stores: ['Target', 'Kroger', 'Aldi', 'Walmart', 'Publix', 'Costco', 'Whole Foods', 'Albertsons', 'Dollar General', 'Trader Joe', 'Recent Recalls'],
    };
    this.findRecall = this.findRecall.bind(this);
    console.log('construction')
  }

  //create fetch request for server items and update the this.state with the items fetched into the urls array
  componentDidMount() {
    console.log('Original Mount')
    fetch(this.state.url)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        console.log('Original Mount!!');
        this.setState({
          recalls: data
        });
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.url !== this.state.url) {
      console.log(this.state.url);
      fetch(this.state.url)
        .then(response => response.json())
        .then((data) => {
          // console.log(data);
          if(data.results){
            this.setState({
              recalls: data.results
            });
          }else{
            this.setState({
              recalls: data
            });
          }
        })
    }
  }

  findRecall(store) {
    console.log(`You hit button for ${store}`);
    if (store !== 'Recent Recalls') {
      this.setState({
        url: `https://api.fda.gov/food/enforcement.json?search=distribution_pattern:${store}+product_description:${store}&sort=report_date:desc&limit=50`
        // url: `${this.state.url}${store}`
      })

    } else {
      this.setState({
        url: 'http://localhost:3000/api/food/more'
      })
    }
  }


  render() {
    const buttons = [];
    this.state.stores.forEach((ele,ind) =>
      buttons.push(
        <button key = {`button${ind}`} type='button' className='storeButton' onClick={() => this.findRecall(ele)}>{ele}</button>
      )
    );

    const items = [];
    for (let i = 0; i < this.state.recalls.length; i++) {
      // console.log(this.state.recalls[i]);
      items.push(<RecallResults key={`item${i}`} index={`${i+1}. `} value={this.state.recalls[i]} />);
    }


    return (
      <div>
        <div className='head'>
          <Link to='/'>
          <h1 id='title' href='http://localhost:3000/api/food/'>Grocery Store Recalls</h1>
          </Link>
        </div>
        <div className='queryContainer'>
          <div className='queryHeader'>
            <h2 id='storeTitle'>Store Selector</h2>
            <div className='storesContainer'>
              {buttons}
            </div>
            {/* <div className='addRecall'>
            <AddRecall/>
            </div> */}
          </div>
          <div className='recallFeed'>
            {items}
          </div>
        </div>
      </div>
    );
  }
}
export default QueryContainer;