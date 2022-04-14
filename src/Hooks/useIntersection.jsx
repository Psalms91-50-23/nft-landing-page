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
                // setState(entry.isIntersecting);
            }, { rootMargin }
        );
        element.current && observer.observe(element.current);
        // return () => observer.unobserve(element.current);
    }, [rootMargin, element]);

    return isVisible;
};

export default useIntersection