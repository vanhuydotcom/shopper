import React, { useState, useContext } from "react"
let initialState = {
    default: localStorage.getItem('lang') || "en"
}
let Context = React.createContext(initialState)
export default function TranslateProvider({ children, translate }) {
    let [state, setState] = useState({ ...initialState, ...translate })
    function t(key) {
        return state?.[state?.default]?.[key] || key
    }
    function selectLang(lang) {
        localStorage.setItem('lang', lang)
        setState({
            ...state,
            default: lang
        })
    }
    return <Context.Provider value={{ t, selectLang, lang: state.default }}>
        {children}
    </Context.Provider>
}





export function useTranslate() {
    let { t, lang, selectLang } = useContext(Context)
    return {
        t, lang, selectLang
    }
}