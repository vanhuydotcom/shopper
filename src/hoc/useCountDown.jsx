import { useEffect, useState } from "react"

const useCountDown = (WrapComponent, timeCountDown) => {
    let [time, setTime] = useState(timeCountDown)
    let d = parseInt(time / 60 / 60 / 24)

    let h = parseInt(time / 60 / 60 - d * 24)

    let m = parseInt(time / 60 - (d * 24 + h) * 60)

    let s = time % 60

    let value = { d, h, m, s }
    useEffect(() => {
        let timeInterval = setInterval(() => {
            if (time === 0) {
                return clearTimeout(timeInterval)
            }
            setTime(--time)
        }, 1000)
    }, [])
    return <WrapComponent {...value} />
}
export default useCountDown