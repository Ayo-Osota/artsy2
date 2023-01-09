const Product = ({imageUrl, name, price}) => {
    return (
        <article className="product-card flow">
            <div style={{backgroundImage: `url(${imageUrl})`}}></div>
            <p>{name}</p>
            <h5 style={{"--flow-spacer": "18px"}}>${price}</h5>
        </article>
    ) 
}

export default Product;