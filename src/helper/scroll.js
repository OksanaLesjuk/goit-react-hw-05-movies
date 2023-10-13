


export const scrollGallery = (galleryRef) => {
    if (galleryRef.current) {
        window.scroll({
            top: galleryRef.current.offsetTop - 100,
            behavior: 'smooth',
        });
    }
};

// export const scrollGallery = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// };

