export default function CarListItem({
_id,
brand,
model,
price

}) {
    

    return (
        <div className="allGames">
            <div className="allGames-info">
                
                <h6>Brand : {brand}</h6>
                <h2>{model}</h2>
                <h2>{price}</h2>
                <a href="#" className="details-button">Details</a>
            </div>

        </div>
    )
}