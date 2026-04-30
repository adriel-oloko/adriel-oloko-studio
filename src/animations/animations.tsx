export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
}

export const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
}

export const plateAmbient = {
    animate: {
        rotate: [0, 360],
        transition: { duration: 40, repeat: Infinity },
    },
}
