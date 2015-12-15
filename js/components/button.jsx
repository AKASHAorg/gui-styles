import Icon from './icon';

const Button = React.createClass({
  propTypes: {
    btnPrefix: React.PropTypes.string,
    btnColor:  React.PropTypes.string,
    content:   React.PropTypes.string.isRequired,
    title:     React.PropTypes.string,
    iconObj:   React.PropTypes.object
    onClick:   React.PropTypes.func
  },
  getDefaultProps(){
    return {
      btnPrefix: 'btn',
      onclick:   ()=> {
      }
    }
  },
  render(){
    //TODO
  const btnClass = `${this.props.btnPrefix} ${this.props.btnColor} ${this.props.position}`;
  }
});