import Event from "./Event";
import EventSlider from "./EventSlider";
import { useAuctionsContext } from "../context/auctions_context";

const EventsSection = () => {
    const { event } = useAuctionsContext();

    return (
        <section className="events-wrapper text-neutral-100">
            <div className="container">
                <h3 className="ff-primary fw-medium fs-sub-heading display-sm-none">
                    See Upcoming Auctions and Exhibitions
                </h3>
                <Event {...event}/>
                <EventSlider/>
            </div>
        </section>
    )
}

export default EventsSection;