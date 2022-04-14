import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
    const [isVisible, setState] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setState(entry.isIntersecting);
                    //observe only once then remove
                    observer.unobserve(element.current);
                }
            }, { rootMargin }
        );
        element.current && observer.observe(element.current);
    }, [rootMargin, element]);

    return isVisible;
};

export default useIntersection