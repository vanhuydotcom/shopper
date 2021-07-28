import { Search, ShoppingCart } from "../component"
import { Wishlist } from "../component/modal/WishList"
import { Product } from "../component/modal/Product"
import { Footer } from "./MainLayout/Footer"
import { Header } from "./MainLayout/Header"

// import { NewsletterHorizontal } from "./MainLayout/NewsletterHorizontal"
// import { NewsletterVertical } from "./MainLayout/NewsletterVertical"
// import { PasswordReset } from "./MainLayout/PasswordReset"
// import { Search } from "./MainLayout/Search"
// import { Sidebar } from "./MainLayout/Sidebar"
// import { SizeChart } from "./MainLayout/SizeChart"
// import { WaitList } from "./MainLayout/WaitList"
export const MainLayout = ({ children }) => {
    return (
        <div className="App">
            {/* <NewsletterHorizontal />
            <NewsletterVertical />
            <PasswordReset />
            <Sidebar />
            <SizeChart />
        <WaitList /> */}
            <Header />
            {children}
            <Search />
            <Footer />
            <ShoppingCart />
            <Product />
            <Wishlist />
        </div>
    )
}