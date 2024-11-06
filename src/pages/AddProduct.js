import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AddProduct = ({ onAddProduct, onEditProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const navigate = useNavigate();  // Hook để điều hướng
    const location = useLocation();  // Để lấy thông tin từ location (state)

    // Sử dụng useEffect để cập nhật giá trị form khi có sản phẩm được chuyển qua
    useEffect(() => {
        if (location.state?.product) {
            const { name, price } = location.state.product;
            setProductName(name);
            setProductPrice(price);
        }
    }, [location]);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo hoặc cập nhật sản phẩm
        const newProduct = {
            id: location.state?.product?.id || Math.random(),  // Nếu có ID thì dùng, không thì tạo mới
            name: productName,
            price: parseFloat(productPrice),
        };

        if (location.state?.product) {
            // Nếu đang chỉnh sửa, gọi hàm onEditProduct
            onEditProduct(newProduct);
        } else {
            // Nếu thêm mới, gọi hàm onAddProduct
            onAddProduct((prevProducts) => [...prevProducts, newProduct]);
        }

        // Quay lại trang chính sau khi thêm hoặc chỉnh sửa sản phẩm
        navigate('/');
    };

    return (
        <div className="modal">
            <h2>{location.state?.product ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tên sản phẩm:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Giá sản phẩm:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{location.state?.product ? 'Cập nhật' : 'Thêm sản phẩm'}</button>
                <button type="button" onClick={() => navigate('/')}>Quay lại</button>
            </form>
        </div>
    );
};

export default AddProduct;
