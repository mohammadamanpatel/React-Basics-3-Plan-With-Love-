import Card from './Card'

function Tour({ tours, removeTour }) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Plan with Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card {...tour} key={tour.id} removeTour={removeTour} />;
                    })
                }
            </div>
        </div>
    )
}
export default Tour