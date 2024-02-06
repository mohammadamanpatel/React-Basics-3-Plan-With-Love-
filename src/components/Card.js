import { useState } from "react"
function Card({ id, name, info, image, price, removeTour }) {
    const [readmore, readmoreFn] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}`;
    function readHandler() {
        readmoreFn(!readmore)
    }
    return (
        <div className="card">
            <img src={image} className="image" alt="img" />
            <div className="tourInfo">
                <div className="tourDetails">
                    <h4 className="tourPrice">{price}</h4>
                    <h4 className="tourName">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="readMore" onClick={readHandler}>
                        {readmore ? `showless` : `readmore`}
                    </span>
                </div>
                <button className="btnRed" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}
export default Card