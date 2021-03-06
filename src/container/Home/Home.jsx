import React from 'react'
import { Link } from "react-router-dom";
import classnames from 'classnames/bind'
import styles from './Home.module.css'
import logoApp from '../../assets/logoApp.png'
import search from '../../assets/search.png'
import menu from '../../assets/menu.png'
import Product from '../../components/Product'

import { products } from '../../utils/contans'

const cx = classnames.bind(styles)

export default () => {

    const [isOnpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <div className={cx('container-all')}>
                <div className={cx('container')}>
                    <div className={cx('container-custom')}>
                        <img src={logoApp} alt='logo' className={cx('logo-app')} />
                        <div className={cx('div-search', 'd-none', 'd-md-flex')}>
                            <img src={search} alt='logo' className={cx('icon-search')} />
                            <input
                                className={cx('input-search')}
                                placeholder={'Tìm kiếm'}
                            />
                        </div>
                        <div className={cx('div-search-none', 'd-inline', 'd-md-none')}>
                        </div>
                        <button
                            onClick={() => {
                                setIsOpen(true)
                            }}
                            className={cx('div-menu', 'd-inline', 'd-md-none')}>
                            <img src={menu} alt='logo' className={cx('icon-search')} />
                        </button>
                        <div className={cx('div-info')}>
                            <p className={cx('txt-nomal', 'd-none', 'd-md-flex')}>NHỚ EM</p>
                        </div>
                    </div>
                    <div className={cx('container', 'div-search-mobile', 'd-flex', 'd-md-none')}>
                        <img src={search} alt='logo' className={cx('icon-search')} />
                        <input
                            className={cx('input-search')}
                            placeholder={'Tìm kiếm'}
                        />
                    </div>
                    <div className={cx('container-categories', 'd-none', 'd-md-flex')}>
                        <Link to="/cart">
                            <p className={cx('txt-category')}>GIÀY</p>
                        </Link>
                        <a href='./' className={cx('txt-category')}>TÚI XÁCH</a>
                        <a href='./' className={cx('txt-category')}>BALO</a>
                        <a href='./' className={cx('txt-category')}>VÍ BÓP</a>
                        <a href='./' className={cx('txt-category')}>DÉP & GUỐC</a>
                        <a href='./' className={cx('txt-category')}>PHỤ KIỆN</a>
                        <a href='./' className={cx('txt-category')}>GIFTCARD</a>
                    </div>
                </div>
            </div>
            {/* <div className={cx('div-line', 'd-none', 'd-md-flex')} /> */}
            <div className={cx('container')}>
                <p className={cx('txt-nomal')}>Trang chủ - Túi Xách - Balo</p>
                <div className={cx('div-filter')}>
                    <button className={cx('button')}>
                        <p className={cx('txt-button')}>BỘ LỌC</p>
                        <p className={cx('txt-button')}>+</p>
                    </button>
                    <p className={cx('txt-nomal')}>Tuỳ chọn sắp xếp sản phẩm</p>
                </div>
                <div className={cx('row')}>
                    {products.map((product) => (<Product {...product} />))}
                </div>
                <div className={cx('div-paging')}>
                    <button className={cx('button-paging')}>
                        <p className={cx('txt-nomal')}>1</p>
                    </button>
                    <button className={cx('button-paging')}>
                        <p className={cx('txt-nomal')}>2</p>
                    </button>
                    <p className={cx('txt-nomal', 'marginHoz')}>...</p>
                    <button className={cx('button-paging')}>
                        <p className={cx('txt-nomal')}>3</p>
                    </button>
                    <button className={cx('button-paging')}>
                        <p className={cx('txt-nomal')}>4</p>
                    </button>
                </div>
                <div className={cx('row', 'div-bottom')}>
                    <div className={cx('col-6', 'col-sm-4', 'col-md-3',)}>
                        <p className={cx('txt-nomal')}>CÔNG TY</p>
                        <p className={cx('txt-nomal')}>Giới thiệu</p>
                        <p className={cx('txt-nomal')}>Tuyển dụng</p>
                    </div>
                    <div className={cx('col-6', 'col-sm-4', 'col-md-3',)}>
                        <p className={cx('txt-nomal')}>CHÍNH SÁCH</p>
                        <p className={cx('txt-nomal')}>Chính sách bảo mật</p>
                        <p className={cx('txt-nomal')}>Ưu đãi khách hàng thân thiết</p>
                        <p className={cx('txt-nomal')}>Chính sách bảo hành trọn đời</p>
                        <p className={cx('txt-nomal')}>Chính sách giao nhận</p>
                        <p className={cx('txt-nomal')}>Chính sách đổi sản phẩm</p>
                    </div>
                    <div className={cx('col-6', 'col-sm-4', 'col-md-3',)}>
                        <p className={cx('txt-nomal')}>HỖ TRỢ KHÁCH HÀNG</p>
                        <p className={cx('txt-nomal')}>Hướng dẫn mua hàng</p>
                        <p className={cx('txt-nomal')}>Tra cứu bảo hành</p>
                        <p className={cx('txt-nomal')}>Quy định về phiếu quà tặng</p>
                        <p className={cx('txt-nomal')}>Điều khoản sử dụng</p>
                    </div>
                    <div className={cx('col-6', 'col-sm-4', 'col-md-3',)}>
                        <p className={cx('txt-nomal')}>KẾT NỐI VASCARA</p>
                        <p className={cx('txt-nomal')}>PHƯƠNG THỨC THANH TOÁN</p>
                    </div>
                </div>

                <p className={cx('txt-policy')}>{'Công ty TNHH MTV Global Fashion. Văn phòng: Lầu 4 tòa nhà ACM số 96 Cao Thắng phường 04 quận 03 TP Hồ Chí Minh. GP số 0314657558 do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày 05/10/2017'}</p>
            </div>
            <div className={cx('constainer-menu', { 'constainer-menu-full-height': isOnpen })}>
                <button
                    onClick={() => {
                        setIsOpen(false)
                    }}
                    className={cx('div-menu', 'd-inline', 'd-md-none')}>
                    <img src={menu} alt='logo' className={cx('icon-search')} />
                </button>
                <a href='./' className={cx('txt-category')}>TÚI XÁCH</a>
                <a href='./' className={cx('txt-category')}>BALO</a>
                <a href='./' className={cx('txt-category')}>VÍ BÓP</a>
                <a href='./' className={cx('txt-category')}>DÉP & GUỐC</a>
                <a href='./' className={cx('txt-category')}>PHỤ KIỆN</a>
                <a href='./' className={cx('txt-category')}>GIFTCARD</a>
            </div>
        </div>
    )
}