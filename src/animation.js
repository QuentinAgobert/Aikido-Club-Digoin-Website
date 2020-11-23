export const lineAnim = {
    hidden: {
        width: "0%",
    },
    show: {
        width: "100%",
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        width: "0%",
        transition: {
            duration: 0.5,
        }
    }
};

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
        },
    },
};