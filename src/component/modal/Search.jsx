import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import ReactDOM from "react-dom"
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTranslate } from "../../core/useTranslate"
import yup from '../../hook/yupPattern'
import { searchAction } from '../../redux/action/productAction'
import { currency } from '../../util'

export const Search = () => {
    let { t } = useTranslate()
    const { search } = useSelector(state => state.product)
    let { categories } = useSelector(state => state.product)
    let dispatch = useDispatch()
    let schema = yup.object().shape({
        search_input: yup.string().required("Don't leave blank").min(5)
    })
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    })
    let [input, setInput] = useState({})
    const onSubmit = (data) => {
        dispatch(searchAction(data?.search_input))
        setInput(data?.search_input)
    }
    return ReactDOM.createPortal(
        <>
            {/* Search */}
            <div className="modal fixed-right fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-vertical" role="document">
                    <div className="modal-content">
                        {/* Close */}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <i className="fe fe-x" aria-hidden="true" />
                        </button>
                        {/* Header*/}
                        <div className="modal-header line-height-fixed font-size-lg">
                            <strong className="mx-auto">{t('Search Products')}</strong>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="modalSearchCategories">{t('Categories:')}</label>
                                    <select className="custom-select" id="modalSearchCategories">
                                        <option selected>{t('All Categories')}</option>
                                        {
                                            categories.map(e => <option key={e._id} value={e._id}>{e.title}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="input-group input-group-merge">
                                    <input {...register('search_input')} className="form-control" type="search" placeholder="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-border" type="submit">
                                            <i className="fe fe-search" />
                                        </button>
                                    </div>
                                </div>
                                {errors?.search_input && <p className='error_text'>{errors?.search_input?.message}</p>}
                            </form>
                        </div>
                        {
                            search ?
                                <>
                                    <div className="modal-body border-top font-size-sm">
                                        <p>{t('Search Results:')}</p>
                                        {
                                            search && search.map((e) => <SearchItem key={e._id} {...e} />)
                                        }
                                        <Link className="btn btn-link px-0 text-reset" to={`/shop?search=${input}`}>
                                            View All <i className="fe fe-arrow-right ml-2" />
                                        </Link>
                                    </div>
                                </>
                                :

                                <div className="d-none modal-body">
                                    <p className="mb-3 font-size-sm text-center">
                                        {t(' Nothing matches your search')}
                                    </p>
                                    <p className="mb-0 font-size-sm text-center">
                                        😞
                                    </p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>,
        document.getElementById('root')

    )
}
const SearchItem = (props) => {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={`${props?.thumbnail_url}`} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <a className="stretched-link text-body" href="./product.html">{props?.name}</a> <br />
                    <span className="text-muted">{currency(props?.real_price)}</span>
                </p>
            </div>
        </div>
    )
}