import React, { useState } from 'react';

const AddProductsModals = ({ onClose, onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Tạo sản phẩm mới
        const newProduct = {
            id: Math.random(),  // Giả lập ID ngẫu nhiên
            name: productName,
            price: parseFloat(productPrice),
            description: productDescription,
        };

        // Gọi hàm onAddProduct để thêm sản phẩm
        onAddProduct(newProduct);

        // Reset form
        setProductName('');
        setProductPrice('');
        setProductDescription('');
        onClose(); // Đóng modal
    };

    return (
        <div className="modal">
            <h2>Thêm sản phẩm</h2>
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
                <div>
                    <label>Mô tả:</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Thêm sản phẩm</button>
                <button type="button" onClick={onClose}>Đóng</button>
            </form>
        </div>
    );
};

export default AddProductsModals;
