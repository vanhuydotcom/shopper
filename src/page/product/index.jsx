import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productApi from "../../service/productApi";
import { Description } from "./component/Description";
import { ProductReplace } from "./component/ProductReplace";
import { ProductSummary } from "./component/ProductSummary";
import { Review } from "./component/Review";
export default function Product() {
    let [selectedProduct, setSelectedProduct] = useState()
    let { product } = useSelector(state => state.product)
    let { slug } = useParams()
    useEffect(() => {
        productApi.productItemDetail(slug)
            .then(res => {
                if (res.data.length > 0) {
                    setSelectedProduct(res?.data[0])
                }
            })
    }, [slug])
    if (!selectedProduct) {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <Skeleton variant='rect' height={300} />
                                    <Skeleton variant="circle" width={80} height={80} />
                                    <Skeleton variant="text" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="circle" width={40} height={40} />
                                    <Skeleton variant="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
    return (
        <>
            <ProductSummary {...selectedProduct} />
            <Description des={selectedProduct?.description} spec={selectedProduct?.specifications} />
            <ProductReplace {...product} />
            <Review />
        </>
    )
}