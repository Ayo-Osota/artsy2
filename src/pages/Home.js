import { Footer, HeroSection, FeaturedProducts, EventsSection, MidpageNavs, CreatorsSection, Newsletter } from "../components";

const Home = () => {
    return (
        <>
            <main>
                <HeroSection />
                <FeaturedProducts />
                <EventsSection />
                <MidpageNavs />
                <CreatorsSection />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default Home;