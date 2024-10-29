import './DefaultButton.css';

function DefaultButton({buttonText, onClick}) {

    return(
        <button onClick={onClick} className='default-button'>{buttonText}</button>
    );
}

export default DefaultButton;