import PropTypes from 'prop-types';

export function Card(props) {
    return (
        <div className="card">
            {
                props.image ? <img src={props.image} className="card-img-top" alt="Image"/> : undefined
            }
            <div className="card-body">
                {props.children}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
}