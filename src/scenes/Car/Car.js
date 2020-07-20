import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import { productcart as productCartAction } from "../../services/car/ProductCarAction";

export const Car = ({ history }) => {

    const { arrayPrpducts } = useSelector(state => state.car);
    const dispatch = useDispatch()

    return (
        <div className="Car">
            <div className="Car_container">
                <div className="Car_container_head">
                    <h1 className="Car_container--title">
                        Carrito.
                    </h1>
                    <Link to="/home">
                        <img src={logo} />
                    </Link>

                </div>
                {arrayPrpducts && arrayPrpducts.map((item, index) =>
                    <div key={index} className="car cart">
                        <img className="img-car" src={item.product.image} />
                        <div className="cart_item">
                            <p className="car_name">{item.product.name}</p>
                            <p className="car_ref">Categoría</p>
                            <p className="car_numRef">{item.product.category}</p>
                            <p className="car_ref">Sub-Categoría</p>
                            <p className="car_numRef">{item.product.subCategory}</p>
                            <p className="car_ref">Cantidad</p>
                            <p className="car_numRef">x{item.cant.cant}</p>
                            <p className="car_ref">Color</p>
                            <div className="cart_color" style={{ backgroundColor: item.product.color }}></div>
                        </div>
                        <div className="cart_item">
                            <p className="car_ref">Precio Antes</p>
                            <p className="car_name priceA">$ {item.product.priceAfter}</p>
                            <p className="car_ref">Precio Ahora</p>
                            <p className="car_name price">$ {item.product.priceBefore}</p>
                            <Button className="btn-r"><DeleteOutlined /></Button>

                        </div>
                    </div>
                )}

                <div className="cont-btn">
                    <Link className="btn btn-shopy" to="/home">
                        Seguir Comprando
                    </Link>
                    <Button className="btn btn-finish">
                        Comprar
                    </Button>
                </div>
            </div>
        </div>
    );
}
