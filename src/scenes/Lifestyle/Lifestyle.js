import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, Empty, Popover } from 'antd';
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { product as productActions, product } from "../../services/product/productActions";
import { category as categoryActions, category } from "../../services/category/categoryActions";
import ListCascade from "../../components/ListCascade/ListCascade";
import { ModalDetailProduct } from "../../components/ModalDetailProduct/ModalDetailProduct";
import Pagination from "../../components/Pagination/Pagination";

import url from "../../assets/image/url.png";
import msj from "../../assets/image/Vector.png";

import { Footer } from "../../components/Footer/Footer";


const { Option } = Select;

export const Lifestyle = () => {

	const { product, products, listProducts } = useSelector(state => state.product)
	const [order, isOrder] = useState(undefined);
	const [menor, setMenor] = useState(0)
	const [mayor, setMayor] = useState(0)
	const [currentOffset, setCurrentOffset] = useState(0)
	const [pageCounter, setPageCounter] = useState(1)
	const [price, setPrice] = useState(undefined)
	const dispatch = useDispatch()

	useEffect(() => {
		var value = price;
		var values = { pageCounter, value }
		dispatch(productActions.getPrices(values))
		dispatch(productActions.getProducts())
	}, [pageCounter])

	useEffect(() => {
		var mayor = 0
		var menor = 0
		for (var i = 0; i < cantProduct; i++) {
			if (listProducts[i].priceBefore > mayor) {
				mayor = listProducts[i].priceBefore
			}
		}
		menor = mayor;
		for (var i = 0; i < cantProduct; i++) {
			if (listProducts[i].priceBefore < menor) {
				menor = listProducts[i].priceBefore
			}
		}
		setMenor(menor)
		setMayor(mayor)
	}, [listProducts])

	const cantProduct = listProducts && listProducts.length;

	const handleChange = (value) => {
		setPrice(value)
		var values = { pageCounter, value }
		dispatch(productActions.getPrices(values))
	}

	const increment = () => {
		var cantPages = (cantProduct / 6)
		if (pageCounter < cantPages) {
			setCurrentOffset(currentOffset + 6)
			setPageCounter(pageCounter + 1)
		}
	}
	const decrement = () => {
		if (pageCounter > 1) {
			setCurrentOffset(currentOffset - 6)
			setPageCounter(pageCounter - 1)
		}
	}

	const content = (
		<div>
			<ListCascade menor={menor} mayor={mayor}  />
		</div>
	);

	


	return (
		<div className="Lifestyle">
			<div className="Lifestyle_cont">
				<div className="Lifestyle_href">
					Home /
				<span className="now">
						Lifestyle
				</span>
				</div>
				<div className="head">
					<span className="now">
						Lifestyle
					</span>
					<Popover placement="leftTop" content={content} trigger="click">
						<Button className="filters">Ver Filtros</Button>
					</Popover>
				</div>
				<div className="Lifestyle_Container">
					<div className="ListCascade-content">
						<ListCascade menor={menor} mayor={mayor} />
					</div>
					<div className="Lifestyle_Container--box">
						<div className="Lifestyle_Container--box__head">
							<span className="cant">
								20 articulos
							</span>
							<div className="now">
								<span className="now--order">
									Ordenar por:
								</span>
								<Select defaultValue="" onChange={handleChange}>
									<Option value="desc">Mayor precio</Option>
									<Option value="asc">Menor Precio</Option>
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

						<Pagination increment={increment} decrement={decrement} />

						<Button className="btn-msj">
							<img className="img" src={msj} />
								Hablemos por chat
						</Button>

					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		</div>
	);
}