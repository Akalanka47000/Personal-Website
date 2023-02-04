export const useResponsive = () => {
    const mobile = process.browser && window.matchMedia('(max-width: 768px)').matches;
    return {
        mobile,
    };
};
