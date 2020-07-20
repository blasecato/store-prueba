import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { productcart as productCartAction } from "../../services/car/ProductCarAction";


export const Record = () => {

    const { arrayPrpducts, shopys } = useSelector(state => state.car);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(productCartAction.getShopy())
    }, [])
    console.log(shopys)

    return (

        <div className="Car">
            <div className="Car_container">
                {shopys && shopys.map((data, i) =>
                    <div key={i} className="Car record">
                        <h1 className="Car_container--title">
                            Compra #. {i + 1}
                        </h1>
                        {data.arrayPrpducts && data.arrayPrpducts.map((item, index) =>
                            <div key={index} className="car cart">

                                <img className="img-car" src={item.product.image} />
                                <div className="cart_item">
                                    <p className="car_name">{item.product.name}</p>
                                    <p className="car_ref">Categoría</p>
                                    <p className="car_numRef">{item.product.category}</p>
                                    <p className="car_ref">Sub-Categoría</p>
                                    <p className="car_numRef">{item.product.subCategory}</p>
                                    <p className="car_ref">Cantidad</p>
                                    <p className="car_numRef">x{item.cant.cant} </p>
                                    <p className="car_ref">Color</p>
                                    <div className="cart_color" style={{ backgroundColor: item.product.color }}></div>
                                </div>
                                <div className="cart_item">
                                    <p className="car_ref">Precio Antes</p>
                                    <p className="car_name priceA">$ {item.product.priceAfter}</p>
                                    <p className="car_ref">Precio Ahora</p>
                                    <p className="car_name  AH">$ {item.product.priceBefore}</p>
                                    <p className="car_ref">Total pedido</p>
                                    <p className="car_name price">$ {item.total}</p>

                                </div>
                            </div>
                        )}
                    </div>
                )}





            </div>
        </div>

    );
}
