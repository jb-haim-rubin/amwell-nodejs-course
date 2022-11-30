import './Product.css'
import cx from 'classname'

export const Product = ({ name, price, onClick, selected }) => {
    return (
        <div
            className={cx('product', { selected: selected })}
            onClick={onClick}
        >
            {name} - {price}
        </div>
    )
}
