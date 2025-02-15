function formatRating(rating) {
    return rating.toFixed(1);
}

function formatRunTime(runtime) {
    const hr = Math.floor(runtime / 60);
    const min = runtime % 60;
    return `${hr}h ${min}min`;
}

export { formatRating, formatRunTime };
