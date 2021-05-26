/**
 * Displays Home Screen of website, inclusive of Slideshow component and interactive map for
 * global branches/chapters. The page dynamically rerenders css as screen width changes, adjusting
 * for mobile/tablet views. It has sub-components for the Slideshow, Interactive Map, and each of
 * the Be Involved sections.
 *
 * @summary Renders and formats Home Page.
 *
 * @author Amrit Kaur Singh
 */

import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import InteractiveMap from "../components/Home/InteractiveMap";
import Slideshow from "../components/Slideshow";
import NewsEventsSlide from "../components/Home/NewsEventsSlide";
import BeInvolved from "../components/Home/BeInvolved";

import "../css/Home.css";

// Mobile Screens
const MAX_HEIGHT_HORIZONTAL_MOBILE = 500; // Landscape Layout
const MAX_MOBILE_WIDTH = 750;

// Tablet Screens - Portrait Layout
const TABLET_MIN_WIDTH = 756;
const TABLET_MAX_WIDTH = 1050;
const TABLET_MIN_HEIGHT = 1000;
const TABLET_MAX_HEIGHT = 2500;

export default function Home() {
    // tracks layout of screen
    const [isMobile, setMobileView] = useState(false);
    const [isHorizontalMobile, setHorizontalMobile] = useState(false);
    const [isTabletVertical, setTebletVertical] = useState(false);
    const introTitle = React.createRef();

    // handler to call on window resize
    useEffect(() => {
        function handleResize() {
            // check if now in mobile mode
            if (window.innerWidth <= MAX_MOBILE_WIDTH) {
                setMobileView(true);
            } else {
                setMobileView(false);
            }

            // mobile landscape mode
            if (window.innerHeight <= MAX_HEIGHT_HORIZONTAL_MOBILE) {
                setHorizontalMobile(true);
            } else {
                setHorizontalMobile(false);
            }

            // portrait tablet screen mode
            if (
                window.innerWidth >= TABLET_MIN_WIDTH &&
                window.innerWidth <= TABLET_MAX_WIDTH &&
                window.innerHeight >= TABLET_MIN_HEIGHT &&
                window.innerHeight <= TABLET_MAX_HEIGHT
            ) {
                setTebletVertical(true);
            } else {
                setTebletVertical(false);
            }
        }
        // add event listener
        window.addEventListener("resize", handleResize);
        handleResize();

        // remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToIntro = () => {
        // only scrolls if element has been rendered on the screen by DOM first
        if (introTitle.current) {
            introTitle.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
            });
        }
    };

    // dummy slideshow data
    const slideData = [
        {
            openInSameTab: true,
            redirect_link: "https://www.google.com/",
            title: "News & Events",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
            image_url:
                "https://s3-alpha-sig.figma.com/img/4e61/b804/4acb878c2ae9c962af57b61b9c0ce1e3?Expires=1622419200&Signature=A4Vo6ehJhS-InREAaHT0ia~wMkWJGgVgC722h3dzLQkgpRStx5G-QYzANTGLJQKMeCPJDn5p3wagEvGGxgJEpl693~h5Vu4kzlwSjdHVxJcDsaLRlisO83GREBNuKpsgWSwhiwCU3Ydh1UnFqIRIIzCSuc5oOlDdTD-ErpKAZ00fM447eSXZ5jobF6sDpjvE0IS0Kg1kw9GuEl9wvcN-B61zBb4X6~yvYG7-1GHx38-H5uKtkH3SVPjkX2HxHRCFqmP7MidfCzEfzRWm-seIYeGqM0jynk5XFllDXwHXkzB7R4QkQEEIAeosNSFFzHGtZBJz0Vr6Wr9ZQkT~qxIlAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
        {
            openInSameTab: false,
            title: "Upcoming Hawaii Conference!",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet.",
            redirect_link: "https://www.google.com/",
            image_url:
                "https://s3-alpha-sig.figma.com/img/2632/7b67/21741a7000235fce33b207b71e8da1cd?Expires=1622419200&Signature=NaKrOXhTogZlNaWaE-kcQHGyv7cZL745P19PBIu3a~8UWgMEh0wqj3bAmfbhisl4j91lMJQei5kgDCFq4KIUeqRX39BNJxg7qt8CKrpx1Hw-kdUaaTz-10Rqp6tw~vxCma9x19Ry~JIhDTRyAjyn2zN21NTYCNvF1Xpc2BgzzavRdZsW22cFD66fde8NG-Sqq85fT4QwvDxStiavUn0EqvAYPvYDxJ2uhghbnI6U07n5MmEI~nrUzV2IamBqywS-B5TMo7Qqxnajzf1H6WgNKrFRVFok5jNVy4J4HNXYJLp7lQFXZ1yzs9YD~bapJXBg1Yo9R6KTWsv58zxvtw2M6g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        },
    ];

    const markers = [
        {
            name: "Buenos Aires",
            coordinates: [-58.3816, -34.6037],
            isBranch: true,
            email: "kingnavid@awesome.com",
            urlLink: "https://www.instagram.com/navidisme/?hl=en",
        },
        {
            name: "La Paz",
            coordinates: [-68.1193, -16.4897],
            isBranch: true,
            email: "thomas@cat.com",
            urlLink:
                "https://tse.ucsd.edu/static/3122a8820897b8d1110b0840edc0944e/a41d1/Thomas_Garry.jpg",
        },
        {
            name: "Brasilia",
            coordinates: [-47.8825, -15.7942],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "Budapest",
            coordinates: [19.0402, 47.4979],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "Delhi",
            coordinates: [77.1025, 28.7041],
            isBranch: false,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
        {
            name: "California",
            coordinates: [-119.4179, 36.7783],
            isBranch: true,
            email: "patrick@weirdo.com",
            urlLink:
                "https://tse.ucsd.edu/static/50db41fd31f90dfd8ae4958102b7476a/ed396/Patrick_Brown.png",
        },
    ];

    function getSlideshowHeight() {
        if (isHorizontalMobile) return "500px";
        if (isMobile) return "95vh";
        if (isTabletVertical) return "55vh";
        return "85vh";
    }
    return (
        <div className="Home">
            {/* Slideshow component */}
            <Slideshow height={getSlideshowHeight()} width="100%" isMobile={isMobile}>
                {/* All Slides mapped here with display information  */}
                {slideData.map((slideInfo) => (
                    <NewsEventsSlide
                        height={getSlideshowHeight()}
                        showButton="true"
                        openInSameTab={slideInfo.openInSameTab}
                        redirect_link={slideInfo.redirect_link}
                        title={slideInfo.title}
                        description={slideInfo.description}
                        image_url={slideInfo.image_url}
                        arrowClickCallback={scrollToIntro}
                    />
                ))}
            </Slideshow>
            {/* Body of Page - Everthing below slideshow */}
            <section className="home-body">
                {/* Introduction */}
                <section id="home-intro">
                    <h1 ref={introTitle}>Introduction </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas facilisis
                        condimentum massa, sit amet lacinia massa commodo sed. Praesent vehicula
                        eget arcu ut laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat
                        arcu, in efficitur sem tortor vel lectus. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Maecenas facilisis condimentum massa, sit amet
                        lacinia massa commodo sed. Praesent vehicula eget arcu ut laoreet. Sed
                        porta, dui ut dapibus sodales, orci neque volutpat arcu, in efficitur sem
                        tortor vel lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas facilisis condimentum massa, sit amet lacinia massa commodo sed.
                        Praesent vehicula eget arcu ut laoreet. Sed porta, dui ut dapibus sodales,
                        orci neque volutpat arcu, in efficitur sem tortor vel lectus.Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Maecenas facilisis condimentum
                        massa, sit amet lacinia massa commodo sed. Praesent vehicula eget arcu ut
                        laoreet. Sed porta, dui ut dapibus sodales, orci neque volutpat arcu, in
                        efficitur sem tortor vel lectus.Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Maecenas facilisis condimentum massa, sit amet lacinia
                        massa commodo sed.
                    </p>
                </section>

                {/* Mini Divider */}
                <hr className="divider" />

                {/* Branches & Chapters Section */}
                <section id="branches-and-chapters">
                    {/* Interactive Map */}
                    <InteractiveMap markers={markers} />

                    {/* Custom Tooltip for Interactive Map */}
                    <ReactTooltip
                        place="left"
                        effect="solid"
                        type="light"
                        border="true"
                        globalEventOff="click"
                        id="soclose"
                        getContent={(dataTip) => (
                            <div>
                                <a
                                    href={markers[Math.floor(dataTip)].urlLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {markers[Math.floor(dataTip)].name}
                                    <FiExternalLink />
                                </a>
                                <br />
                                {markers[Math.floor(dataTip)].email}
                            </div>
                        )}
                    />
                    {/* Branch/Chapter Information  */}
                    <div className="branch-info">
                        <h1>Branches </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            facilisis condimentum massa, sit amet lacinia massa commodo sed.
                            {"\n\n\n"}
                            Click on a pin for more information about the branch!
                            {"\n\n"}
                        </p>
                        {/* Mini Color Legend  */}
                        <section className="legend-container">
                            <div className="label">
                                <div className="color-box" style={{ backgroundColor: "#EA8644" }} />
                                <div className="tag"> Branch </div>
                            </div>

                            <div className="label">
                                <div className="color-box" style={{ backgroundColor: "#8477B9" }} />
                                <div className="tag"> Chapter </div>
                            </div>
                        </section>
                    </div>
                </section>
                {/* Be Involved Section  */}
                <section id="home-be-involved">
                    <h1>Be Involved </h1>
                    <div className="involve-sections-container">
                        {/* Join Us  */}
                        <BeInvolved
                            description="Become a member of Sakyadhita!"
                            image_url="https://d.wattpad.com/story_parts/271116779/images/161bdd205bbf18fb307084307993.jpg"
                            openInSameTab="true"
                            redirect_link="/join"
                            button_title="Join Us"
                        />
                        {/* Volunteer  */}
                        <BeInvolved
                            description="Interested in helping us with anything from writing content to
                            building?"
                            image_url="https://lh3.googleusercontent.com/tVonHCrVh7igUJjFPyZ9-Cpa9eZBQXsSHGOh0_XHioRJtwK-AWFN4nH5B12qVdn1Kw8VRe_5nvegTgVu=w1080-h608-p-no-v0"
                            openInSameTab="true"
                            redirect_link="/volunteer"
                            button_title="Volunteer"
                        />
                        {/* Donate  */}
                        <BeInvolved
                            description="Help us grow and continue to connect by donating in any amount"
                            image_url="https://cdn9.dissolve.com/p/D1024_57_273/D1024_57_273_1200.jpg"
                            openInSameTab="false"
                            redirect_link="https://www.paypal.com/donate?token=OHfoxPvmqn1U-GS2GQWfp-3meA63s0tE_fqAWoLmqyiGBh4SWJfZ0rM5jb63hTCsOYZQ_JJvWdyKgwHX"
                            button_title="Donate"
                        />
                    </div>
                </section>
            </section>
        </div>
    );
}
