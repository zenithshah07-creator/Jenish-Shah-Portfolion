import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-CRC9EFB1B0"; // Replace with your actual Measurement ID

export const initGA = () => {
    ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path) => {
    ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
    ReactGA.event({
        category: category,
        action: action,
        label: label,
    });
};
