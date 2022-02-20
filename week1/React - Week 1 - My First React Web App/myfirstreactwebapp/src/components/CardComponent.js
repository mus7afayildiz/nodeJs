//Card component olusturulur ve export edilir

function CardComponent() {
    return (
        <div className="d-flex flex-wrap-row py-3 mb-2">
            <div className="card m-5">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c3/95/c8.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-5">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c3/95/c8.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <div className="card m-5">
                <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c3/95/c8.jpg" class="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;