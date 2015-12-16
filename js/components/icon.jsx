
Icon = React.createClass({
  propTypes: {
    iconClass:    React.PropTypes.string.isRequired,
    packageClass: React.PropTypes.string,
    position:     React.PropTypes.oneOf(['left', 'right']),
    iconSize:     React.PropTypes.oneOf(['tiny', 'small', 'medium', 'large'])
  },

  getDefaultProps(){
    return {
      packageClass: 'material-icons',
      iconSize:     'small',
      position:     'left'
    }
  },

  render(){
    const btnClass = classNames(this.props.packageClass, this.props.iconSize, this.props.position);
    return <i className={btnClass}>{this.props.iconClass}</i>;
  }

});