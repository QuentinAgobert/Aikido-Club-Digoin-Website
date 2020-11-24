export const lineAnimation = {
    hidden: {
        width: "0%",
    },
    show: {
        width: "100%",
        transition: {
            duration: 0.75,
            delay: 0.75,
        },
    },
    exit: {
        width: "0%",
        transition: {
            duration: 0.75,
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
            when: 'beforeChildren',
            staggerChildren: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
        },
    },
};

export const navAnimation = {
    hidden: {
        x: -200,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
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