import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, onDeleteProduct }) => {
    return (
        <div className="product-list">
            <h2>Danh sách sản phẩm</h2>
            {products.length === 0 ? (
                <p>Không có sản phẩm nào.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <span>{product.name} - {product.price} VND</span>
                            {/* Nút chỉnh sửa với Link đi tới trang thêm hàng hóa và truyền thông tin sản phẩm */}
                            <Link 
                                to="/add-product" 
                                state={{ product }}
                            >
                                <button>Chỉnh sửa</button>
                            </Link>
                            {/* Nút xóa sản phẩm */}
                            <button onClick={() => onDeleteProduct(product.id)}>Xóa</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductList;
