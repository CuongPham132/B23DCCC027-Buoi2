import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './pages/AddProduct';  // Trang thêm sản phẩm
import './App.css';

function App() {
    const [products, setProducts] = useState([
        
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleEditProduct = (updatedProduct) => {
        setProducts(products.map(product =>
            product.id === updatedProduct.id ? updatedProduct : product
        ));
    };

    return (
        <Router>
            <div className="App">
                <div className="header">
                    {/* Liên kết tới trang thêm sản phẩm */}
                    <Link to="/add-product">
                        <button className="add-button">Thêm hàng hóa</button>
                    </Link>

                    {/* Ô tìm kiếm ở góc phải */}
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Tìm kiếm sản phẩm..."
                        className="search-input"
                    />
                </div>

                <Routes>
                    {/* Trang chính, hiển thị danh sách sản phẩm */}
                    <Route
                        path="/"
                        element={
                            <ProductList
                                products={products.filter((product) =>
                                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                                )}
                                onDeleteProduct={handleDeleteProduct}
                            />
                        }
                    />

                    {/* Trang thêm hoặc chỉnh sửa sản phẩm */}
                    <Route
                        path="/add-product"
                        element={<AddProduct onAddProduct={setProducts} onEditProduct={handleEditProduct} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
