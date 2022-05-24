import '../stylesheets/button.css'

function Button (props) {

  const isOperator = value => {
    return isNaN(value) && (value != '.');
  };

  return(
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}  onClick={() => props.useClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;