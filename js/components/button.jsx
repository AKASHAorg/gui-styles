
Button = React.createClass({
  propTypes: {
    btnPrefix: React.PropTypes.string,
    btnColor:  React.PropTypes.string,
    content:   React.PropTypes.string.isRequired,
    iconClass: React.PropTypes.string,
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

    const btnClass = classNames(this.props.btnPrefix, this.props.btnColor, this.props.position);
    const icon = <Icon iconClass={this.props.iconClass}></Icon>;
    return <a className={btnClass}>
      {icon}
      {this.props.content}
    </a>
  }
});