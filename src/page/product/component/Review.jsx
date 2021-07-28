import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { formatRelative } from "date-fns"
import yup from "../../../hook/yupPattern"
import { firebaseDb } from "../../../service/firebase/config"
import { addDoc } from "../../../service/firebase/service"
import { useTranslate } from "../../../core/useTranslate"

export function Review() {
    let { t } = useTranslate()

    let [review, setReview] = useState(null)
    // console.log(review);
    let schema = yup.object().shape({
        name: yup.string().required('Cannot be left blank').name("Names can't have numbers"),
        email: yup.string().required('Cannot be left blank').email('Email not be valid '),
        title: yup.string().required('Cannot be left blank'),
        content: yup.string().required('Cannot be left blank').min(10),
        rating: yup.string()
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        method: 'onChange',
        resolver: yupResolver(schema)
    })
    const onSubmit = (data) => {
        addDoc('review', { data })
        // console.log(data);
    }
    useEffect(() => {
        firebaseDb.collection('review').onSnapshot((snapshot) => {
            const data = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setReview(data)
        })
    }, [])
    let [rate, setRate] = useState(1)
    const _rating = (e) => {
        // console.log(e.target.dataset.value);
        setRate(e.target.dataset.value);

    }
    const _reset = () => {
        document.querySelector('#form-review').reset()
    }
    return (
        <section className="pt-9 pb-11" id="reviews">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Heading */}
                        <h4 className="mb-10 text-center">{t('Customer Reviews')}</h4>
                        {/* Header */}
                        <div className="row align-items-center">
                            <div className="col-12 col-md-auto">
                                {/* Dropdown */}
                                <div className="dropdown mb-4 mb-md-0">
                                    {/* Toggle */}
                                    <a className=" text-reset" href="#">
                                        <strong>{t('Review')}: ({review && review.length})</strong>
                                    </a>
                                    {/* Menu */}
                                    {/* <div className="dropdown-menu mt-3">
                                        <a className="dropdown-item" href="#!">Newest</a>
                                        <a className="dropdown-item" href="#!">Oldest</a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-12 col-md text-md-center">
                                {/* <div className="rating text-dark h6 mb-4 mb-md-0" data-value={4}>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                </div> */}
                                {/* <strong className="font-size-sm ml-2">Reviews (3)</strong> */}
                            </div>
                            <div className="col-12 col-md-auto">
                                <a className="btn btn-sm btn-dark" data-toggle="collapse" href="#reviewForm">
                                    {t('Write Review')}
                                </a>
                            </div>
                        </div>
                        {/* New Review */}
                        <div className="collapse" id="reviewForm">
                            {/* Divider */}
                            <hr className="my-8" />
                            {/* Form */}
                            <form onSubmit={handleSubmit(onSubmit)} id="form-review">
                                <div className="row">
                                    <div className="col-12 mb-6 text-center">
                                        {/* Text */}
                                        <p className="mb-1 font-size-xs">
                                            Score:
                                        </p>
                                        {/* Rating form */}
                                        <div className="rating-form">
                                            {/* Input */}
                                            <input {...register('rating', { value: rate })} className="rating-input" style={{ zIndex: '-1' }} />
                                            {/* Rating */}
                                            <div className="rating h5 text-dark" data-value={rate}>
                                                <div className="rating-item" onClick={_rating} >
                                                    <i data-value={1} className="fas fa-star" />
                                                </div>
                                                <div className="rating-item" onClick={_rating}>
                                                    <i data-value={2} className="fas fa-star" />
                                                </div>
                                                <div className="rating-item" onClick={_rating}>
                                                    <i data-value={3} className="fas fa-star" />
                                                </div>
                                                <div className="rating-item" onClick={_rating}>
                                                    <i data-value={4} className="fas fa-star" />
                                                </div>
                                                <div className="rating-item" onClick={_rating}>
                                                    <i data-value={5} className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewName">Your Name:</label>
                                            <input {...register('name')} className="form-control form-control-sm" id="reviewName" type="text" placeholder="Your Name *" />
                                            {errors?.name && <p className="error_text">{errors.name?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Email */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewEmail">Your Email:</label>
                                            <input {...register('email')} className="form-control form-control-sm" id="reviewEmail" type="text" placeholder="Your Email *" />
                                            {errors?.email && <p className="error_text">{errors.email?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewTitle">Review Title:</label>
                                            <input  {...register('title')} className="form-control form-control-sm" id="reviewTitle" type="text" placeholder="Review Title *" />
                                            {errors?.title && <p className="error_text">{errors.title?.message}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        {/* Name */}
                                        <div className="form-group">
                                            <label className="sr-only" htmlFor="reviewText">Review:</label>
                                            <textarea {...register('content')} className="form-control form-control-sm" id="reviewText" rows={5} placeholder="Review *" />
                                            {errors?.content && <p className="error_text">{errors.content?.message}</p>}

                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        {/* Button */}
                                        <button className="btn btn-outline-dark" type="submit" onClick={_reset} >
                                            Post Review
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* Reviews */}
                        <div className="mt-8">
                            {
                                review ? review.map((e) => (
                                    <ReviewItem key={e.id} {...e} />
                                ))
                                    : <></>

                            }

                        </div>
                        {/* Pagination */}
                        {/* <nav className="d-flex justify-content-center mt-9">
                            <ul className="pagination pagination-sm text-gray-400">
                                <li className="page-item">
                                    <a className="page-link page-link-arrow" href="#">
                                        <i className="fa fa-caret-left" />
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">3</a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link page-link-arrow" href="#">
                                        <i className="fa fa-caret-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav> */}
                    </div>
                </div>
            </div>
        </section >

    )
}
const ReviewItem = (props) => {
    let { createAt, data, id } = props
    const formatDate = () => {
        let formattedDate = ''
        if (createAt?.seconds) {
            formattedDate = formatRelative(new Date(createAt?.seconds * 1000), new Date());
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        }
        return formattedDate;
    }
    return (
        <div className="review">
            {/* Body */}
            <div className="review-body">
                <div className="row">
                    <div className="col-12 col-md-auto">
                        {/* Avatar */}
                        <div className="avatar avatar-xxl mb-6 mb-md-0">
                            <span className="avatar-title rounded-circle">
                                <i className="fa fa-user" />
                            </span>
                        </div>
                    </div>
                    <div className="col-12 col-md">
                        {/* Header */}
                        <div className="row mb-6">
                            <div className="col-12">
                                {/* Rating */}
                                <div className="rating font-size-sm text-dark" data-value={data?.rating}>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                    <div className="rating-item">
                                        <i className="fas fa-star" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                {/* Time */}
                                <span className="font-size-xs text-muted">
                                    {data?.name}, <time dateTime="2019-07-07">{formatDate(createAt?.seconds)}</time>
                                </span>
                            </div>
                        </div>
                        {/* Title */}
                        <p className="mb-2 font-size-lg font-weight-bold">
                            {data?.title}
                        </p>
                        {/* Text */}
                        <p className="text-gray-500">
                            {data?.content}
                        </p>
                        {/* Footer */}
                        {/* <div className="row align-items-center">
                            <div className="col-auto d-none d-lg-block">
                                <p className="mb-0 font-size-sm">Was this review helpful?</p>
                            </div>
                            <div className="col-auto mr-auto">
                                <div className="rate">
                                    <a className="rate-item" data-toggle="vote" data-count={2} href="#" role="button">
                                        <i className="fe fe-thumbs-up" />
                                    </a>
                                    <a className="rate-item" data-toggle="vote" data-count={1} href="#" role="button">
                                        <i className="fe fe-thumbs-down" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <p className="mb-0 font-size-sm">Comments (1)</p>
                            </div>
                            <div className="col-auto">
                                <a className="btn btn-xs btn-outline-border" href="#!">
                                    Comment
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* Child review */}
            {/* <div className="review review-child">
                <div className="review-body">
                    <div className="row">
                        <div className="col-12 col-md-auto">
                            <div className="avatar avatar-xxl mb-6 mb-md-0">
                                <span className="avatar-title rounded-circle">
                                    <i className="fa fa-user" />
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md">
                            <div className="row mb-6">
                                <div className="col-12">
                                    <div className="rating font-size-sm text-dark" data-value={4}>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="rating-item">
                                            <i className="fas fa-star" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <span className="font-size-xs text-muted">
                                        William Stokes, <time dateTime="2019-07-14">14 Jul 2019</time>
                                    </span>
                                </div>
                            </div>
                            <p className="mb-2 font-size-lg font-weight-bold">
                                Very good
                            </p>
                            <p className="text-gray-500">
                                Made face lights yielding forth created for image behold blessed seas.
                            </p>
                            <div className="row align-items-center">
                                <div className="col-auto d-none d-lg-block">
                                    <p className="mb-0 font-size-sm">Was this review helpful?</p>
                                </div>
                                <div className="col-auto mr-auto">
                                    <div className="rate">
                                        <a className="rate-item" data-toggle="vote" data-count={7} href="#" role="button">
                                            <i className="fe fe-thumbs-up" />
                                        </a>
                                        <a className="rate-item" data-toggle="vote" data-count={0} href="#" role="button">
                                            <i className="fe fe-thumbs-down" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                    <p className="mb-0 font-size-sm">Comments (0)</p>
                                </div>
                                <div className="col-auto">
                                    <a className="btn btn-xs btn-outline-border" href="#!">
                                        Comment
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
        </div>
    )
}