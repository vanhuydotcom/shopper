import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoriesAction, consumerRating, phoneRating, sportRating } from "../../redux/action/productAction";
import { LOADING } from "../../redux/type";
import BestPick from "./component/BestPick";
import Categories from "./component/Categories";
import Brands from "./component/Brands";
import CountDown from "./component/CountDown";
import Features from "./component/Features";
import Reviews from "./component/Reviews";
import TopSeller from "./component/TopSeller";
import { getCart } from "../../redux/action/cartAction";
import useCountDown from "../../hoc/useCountDown";

export default function Home() {
    let dispatch = useDispatch()
    let { login } = useSelector(state => state.auth)

    useEffect((e) => {
        dispatch(categoriesAction())
        dispatch({
            type: LOADING
        })
        dispatch(phoneRating())
        dispatch(sportRating())
        dispatch(consumerRating())
        if (login) {
            dispatch(getCart())
        }

    }, [])
    return (
        <>
            <Categories />
            <Features />
            <BestPick />
            <TopSeller />
            {useCountDown(CountDown, 99999)}
            <Reviews />
            <Brands />
        </>
    )
}