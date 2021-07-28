import { useHistory } from 'react-router-dom'
import Reat, { useState, useRef } from 'react'
export default function useDeLayLink() {

    let history = useHistory()

    function delayLink(e) {
        e.preventDefault()
        let href = e.currentTarget.getAttribute('href')

        setTimeout(() => {
            history.push(href)
        }, 500)
        document.body.classList.remove('menu-is-show')
    }
    return delayLink
}