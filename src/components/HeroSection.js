import { carouselImages } from "../utils.js/data";

const HeroSection = () => {
    return (
        <section className="hero-section even-columns">
            <h1
                className="text-center ff-secondary text-grey-300 fw-medium fs-primary-heading primary-heading"
            >
                Photography is poetry <span className="display-lg-none">and</span>
                <span className="display-sm-none">&</span> beautiful untold stories
            </h1>
            <p className="text-center ff-primary text-grey-400 fw-medium fs-100">
                Flip through more than 10,000 vintage shots, old photograghs, historic
                images and captures seamlessly in one place. Register to get top
                access.
            </p>
            <div className="sm-hero display-lg-none">
                {carouselImages.slice(5, 8).map((image) => {
                    const { id, url } = image;
                    return (
                        <img key={id} src={url} alt="image" />
                    )
                })}
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="lg-hero display-sm-none">
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
                <div className="hero-slide"></div>
            </div>
        </section>
    )
}

export default HeroSection;