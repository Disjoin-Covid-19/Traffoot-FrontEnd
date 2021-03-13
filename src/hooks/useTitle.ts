import { useEffect } from "react"

const useTitle = (title: string) => {
    useEffect(() => {
        window.document.title = 'FootTrack - ' + title;
    }, [title])
}

export default useTitle;