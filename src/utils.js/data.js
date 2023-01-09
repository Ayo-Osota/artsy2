import cartIcon from "../assets/artsy-icons/cart-icon.svg";
import searchIcon from "../assets/artsy-icons/search-icon.svg";
import notificationIcon from "../assets/artsy-icons/notification-icon.svg";
import product10 from "../assets/sm-hero-images/product10.jpg";
import product11 from "../assets/sm-hero-images/product11.png"
import product13 from "../assets/sm-hero-images/product13.png";
import eventImage from "../assets/events/event-photo.png";
import pfp1 from "../assets/pfp/pfp-1.png";
import pfp2 from "../assets/pfp/pfp-2.png";
import pfp3 from "../assets/pfp/pfp-3.png";
import pfp4 from "../assets/pfp/pfp-4.png";
import pfp5 from "../assets/pfp/pfp-5.png";

const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'marketplace',
        url: '/marketplace',
    },
    {
        id: 3,
        text: 'auctions',
        url: '/auctions',
    },
    {
        id: 4,
        text: 'drop',
        url: '/drop',
    }
]

const navIcons = [
    {
        id: 1,
        text: 'search',
        icon: searchIcon,
    },
    {
        id: 2,
        text: 'cart',
        icon: cartIcon,
    },
    {
        id: 3,
        text: 'notification',
        icon: notificationIcon,
    }
]

const midNavs = [
    {
        id: "m1",
        text: 'Explore marketplace',
        url: "/marketplace",
    },
    {
        id: "m2",
        text: 'See auctions',
        url: "/auctions",
    }
]

const carouselImages = [
    {
        "id": "c1",
        "url": "https://images.unsplash.com/photo-1665854598270-d4a12f9e95b2?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8YWxsfDY5fHx8fHx8Mnx8MTY2NTk1NDAzMA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
    },
    {
        "id": "c2",
        "url": "https://images.unsplash.com/photo-1665808044552-102b98dbdda6?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8YWxsfDgwfHx8fHx8Mnx8MTY2NTk1NDAzMA&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
    },
    {
        "id": "c3",
        "url": "https://images.unsplash.com/photo-1665873845039-addf16e6e180?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8YWxsfDk0fHx8fHx8Mnx8MTY2NjAwMjkwMw&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
    },
    {
        "id": "c4",
        "url": "https://images.unsplash.com/photo-1665677602807-39836757ce89?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8YWxsfDI1N3x8fHx8fDJ8fDE2NjU5NTQ3MDI&ixlib=rb-1.2.1&q=80&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450"
    },
    {
        "id": "c5",
        "url": "https://images.unsplash.com/photo-1665729608934-ea2781bd6654?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
    },
    {
        "id": "c6",
        "url": product13
    },
    {
        "id": "c7",
        "url": product11
    },
    {
        "id": "c8",
        "url": product10
    }
]

const pfpImages = [
    {
        "id": "p1",
        "image": pfp1
    },
    {
        "id": "p2",
        "image": pfp2
    },
    {
        "id": "p3",
        "image": pfp3
    },
    {
        "id": "p4",
        "image": pfp4
    },
    {
        "id": "p5",
        "image": pfp5
    }
]

const events = [
    {
        "id": "e1",
        "title": "ART IN TOKYOOOO",
        "date": "02:00 GTS . Sunday",
        "image": eventImage,
        "details": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quasi architecto, aliquid dolorem soluta sint unde deleniti animi voluptate, Tempore."
    },
    {
        "id": "e2",
        "title": "MONALISA REDEFINED IN STYLE.",
        "date": "08:00 GTS . Monday",
        "image": eventImage,
        "details": "GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS."
    }
]

const products_url = 'https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json';

export {links, carouselImages, navIcons, midNavs, events, products_url, pfpImages}