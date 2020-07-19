import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, Empty } from 'antd';
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { product as productActions, product } from "../../services/product/productActions";
import { category as categoryActions, category } from "../../services/category/categoryActions";
import ListCascade from "../../components/ListCascade/ListCascade";
import { ModalDetailProduct } from "../../components/ModalDetailProduct/ModalDetailProduct";

import url from "../../assets/image/url.png";
import msj from "../../assets/image/Vector.png";


const { Option } = Select;

export const Lifestyle = () => {

	const { product, products, productColor } = useSelector(state => state.product)
	const [order, isOrder] = useState(undefined);
	const [menor, isMenor] = useState(false)
	const [mayor, isMayor] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productActions.getProduct())
	}, [])

	useEffect(() => {
		products.sort(function (a, b) {
			if (a.priceBefore > b.priceBefore) { return 1; }
			if (a.priceBefore < b.priceBefore) { return -1; }
			return 0;
		});
	}, [products])

	const handleChange = (value) => {
		console.log(value)
		if (value === "menor") {
			products.reverse();
			isOrder(1);
		} else if (value === "mayor") {
			products.reverse();
			isOrder(2);
		}
	}

	return (
		<div className="Lifestyle">
			<div className="Lifestyle_cont">
				<div className="Lifestyle_href">
					Home /
				<span className="now">
						Lifestyle
				</span>
				</div>
				<div className="Lifestyle_Container">
					<ListCascade />
					<div className="Lifestyle_Container--box">
						<div className="Lifestyle_Container--box__head">
							<span className="cant">
								20 articulos
							</span>
							<div className="now">
								<span className="now--order">
									Ordenar por:
								</span>
								<Select defaultValue="menor" onChange={handleChange}>
									<Option value="mayor">Mayor precio</Option>
									<Option value="menor">Menor Precio</Option>
								</Select>
							</div>
						</div>
						<div className="Lifestyle_Container__store">
							{products && products.length > 0 ?
								<>
									{products && products.map((item, index) =>
										<div className="Lifestyle_Container__store--item" key={index}>
											<img className="img" src={item.image} />
											<div className="data-article">
												<div className="data-article--data">
													<span className="name">
														{item.name}
													</span>
													<span className="subCategory">
														{item.subCategory}
													</span>
													<span className="price1">
														{item.priceAfter}
													</span>
													<span className="price2">
														$ {item.priceBefore}
													</span>
												</div>
												<div className="data-article--btn">
													<ModalDetailProduct product={item} />
												</div>
											</div>
										</div>
									)
									}
								</>
								:
								<Empty
									description={
										<span>
											No se encontraron articulos para esta busqueda.
										</span>
									}
								/>
							}
						</div>
						<Button className="btn-msj">
							<img className="img" src={msj} />
								Hablemos por chat
							</Button>
					</div>
				</div>
			</div>
		</div>
	);
}