import '../stylesheets/clear.css'

function Clear(props) {
    return(
        <div className={`${'button-clear'} ${props.error ? 'error' : ''}`} onClick={props.useClick}>
            {props.children}
        </div>
    );
}

export default Clear;