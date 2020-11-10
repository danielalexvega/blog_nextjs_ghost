import React from 'react';

class Prices extends React.Component {
  state = {
    currency: 'USD'
  }

  render() {
    return (
      <div>
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin rate for {this.props.bpi.USD.description}
          </li>
        </ul>
      </div>
    );
  }
}

export default Prices;