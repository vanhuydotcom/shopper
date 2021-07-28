import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

export default function ShopProduct() {
    let { product } = useSelector((state) => state.product)
    return (

        <div className="row">

            {
                product?.map((e) => <ProductItem
                    {...e}
                    key={e._id}
                />)
            }
        </div>

    )
}