import React, { PropTypes } from 'react'

export const TextField = React.createClass({  
  render: function() {
    return <textArea rows="10" cols="50" value={JSON.stringify(this.props)}></textArea>;
  }
});

export default TextField

