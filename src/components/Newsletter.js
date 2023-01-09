

const Newsletter = () => {
    return (
        <section className="newsletter container flow">
            <h4 className="ff-news text-grey-300 fw-regular fs-500">NEWSLETTER</h4>
            <p className="ff-primary text-grey-300 fs-600">Subscribe to get daily updates on new drops & exciting deals</p>
            <form action="submit">
                <input type="email" name="Email" placeholder="ENTER YOUR EMAIL" />
                <button type="submit">SUBSCRIBE</button>
            </form>
        </section>
    )
}

export default Newsletter;