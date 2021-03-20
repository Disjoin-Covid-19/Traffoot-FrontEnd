import { useEffect, useCallback, useRef } from 'react';
interface IUseScrollDirectionArgs {
    onScroll(f: number): void;
    frameLimit: number;
}

const useScrollDirection = (args: IUseScrollDirectionArgs) => {

    const prev = useRef(window.scrollY);
    const debounced = useRef(false);
    const frame = useRef(0);

    const onScroll = useCallback(function (e) {
        e.preventDefault();
        const w = e.currentTarget;
        if (debounced.current) {
            prev.current = w.scrollY; // still interested in scrolls resting place
            return;
        }
        debounced.current = true;
        if (prev.current > w.scrollY) {
            // up
            frame.current = frame.current === 0 ? 0 : frame.current -1;
            args.onScroll(frame.current);
        } else if (prev.current < w.scrollY) {
            // down
            frame.current = frame.current === args.frameLimit ? args.frameLimit : frame.current + 1;
            args.onScroll(frame.current);
        }
        prev.current = w.scrollY;
        setTimeout(() => debounced.current = false, 500)
    }, [args, debounced, prev])

    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    })
}

export default useScrollDirection;