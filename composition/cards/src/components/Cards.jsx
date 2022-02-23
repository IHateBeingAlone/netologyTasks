import {Card} from './Card'

export function Cards() {

    return (
        <div className="cards">
            <Card image={"https://images.slideplayer.com/23/6903186/slides/slide_22.jpg"}>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </Card>
            <Card>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natual lead-in to additional content.</p>
            </Card>
        </div>
    );
}