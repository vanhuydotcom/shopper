import { Link, useRouteMatch } from "react-router-dom";
import { convertObjToQuery, convertQueryToObj } from '../util'
export function Pagination({ totalPage, currentPage }) {
    let match = useRouteMatch()
    function renderPage() {
        if (totalPage === 1) return []
        let start = currentPage - 2
        if (start < 1) start = 1
        let end = currentPage + 2
        let list = []
        if (end > totalPage) {
            end = totalPage;
        }
        for (let i = start; i <= end; i++) {
            let objUrl = convertQueryToObj()
            objUrl.page = i
            let queryString = convertObjToQuery(objUrl)
            list.push(
                <li className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <Link className="page-link" to={`${match.url}?${queryString}`}>{i}</Link>
                </li>
            )
        }
        return list
    }
    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                {
                    currentPage > 1 && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow"
                                to={`${match.url}?${convertObjToQuery(
                                    { ...convertQueryToObj(), page: currentPage - 1 }
                                )}`}
                            >
                                <i className="fa fa-caret-left" />
                            </Link>
                        </li>
                    )
                }
                {
                    renderPage()
                }
                {
                    currentPage < totalPage && (
                        <li className="page-item">
                            <Link className="page-link page-link-arrow"
                                to={`${match.url}?${convertObjToQuery(
                                    { ...convertQueryToObj(), page: currentPage + 1 }
                                )}`}
                            >
                                <i className="fa fa-caret-right" />
                            </Link>
                        </li>
                    )
                }

            </ul>
        </nav>
    )
}