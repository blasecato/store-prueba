import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, Slider, Switch } from 'antd';
import { GithubPicker } from 'react-color';
import { useSelector, useDispatch } from 'react-redux';

import { product as productActions, product } from "../../services/product/productActions";
import { category as categoryActions, category } from "../../services/category/categoryActions";

const { Option } = Select;

const ListCascade = () => {

	const { products } = useSelector(state => state.product)
	const { categorys, colors, prices } = useSelector(state => state.category)
	const dispatch = useDispatch()
	const [disabled, setDisabled] = useState(false)
	const [category, setCategory] = useState(undefined)
	const [fashion, setFashion] = useState(undefined)
	const [subCategory, setSubCategory] = useState(undefined)
	const [electronica, setElectronica] = useState(undefined)
	const [colection, setColection] = useState(undefined)
	const [cicle, setCicle] = useState(undefined)

	useEffect(() => {
		dispatch(categoryActions.getCategory())
		dispatch(categoryActions.getColor())
		dispatch(categoryActions.getPrice())
	}, [])

	useEffect(() => {
		setFashion(categorys.find((item) => item.name === "fashion"))
		setElectronica(categorys.find((item) => item.name === "electronica"))
		setColection(categorys.find((item) => item.name === "coleccionables"))
		setCicle(categorys.find((item) => item.name === "bisicleta"))
	}, [categorys])
	
	const handleChangeCategory = (value) => {
		setCategory(value)
		var category = value
		const values = {category , subCategory}
		dispatch(productActions.getSubcategory(values))
	}

	const handleChange = (value) => {
		console.log(`selected ${value}`);
	}

	const handleChangeFashion = (value) => {
		var subCategory = value;
		var values = { subCategory , category }
		setSubCategory(value)
		dispatch(productActions.getSubcategory(values))
	}

	const handleChangeColor = (value) => {
		var values = { value, category, subCategory }
		dispatch(productActions.getColor(values))
	}

	const handleButtonCategoryColection = (colection) => {
		const value = colection.name
		setCategory(value)
		dispatch(productActions.get(value))
	}

	const handleButtonCategoryCicle = (cicle) => {
		const value = cicle.name
		setCategory(value)
		dispatch(productActions.get(value))
	}

	return (
		<div className="listCascade">
			<h1 className="listCascade--title">
				Lifestyle
      </h1>
			<div className="list">
				<div className="list-item">
					<h1 className="list--item-title category">
						Categoria
          </h1>
					<Select defaultValue="" className="list__select" onChange={handleChangeCategory}>
						{categorys && categorys.map((item) => (
							<Option key={item.id} value={item.name}>{item.name}</Option>
						))}
					</Select>
				</div>
				<div className="list-item content">
					<h1 className="list--item-title">
						Fashion
          </h1>
					<Select defaultValue="" className="list__select" onChange={handleChangeFashion}>
						{fashion && fashion.subCategory.map((item) => (
							<Option key={item.id} value={item.name}>{item.name}</Option>
						))}
					</Select>
				</div>
				<div className="list-item content">
					<h1 className="list--item-title">
						Electrónica
          </h1>
					<Select defaultValue="" className="list__select" onChange={handleChangeFashion}>
						{electronica && electronica.subCategory.map((item) => (
							<Option key={item.id} value={item.name}>{item.name}</Option>
						))}
					</Select>
				</div>
				<div onClick={() => handleButtonCategoryColection(colection)} className="list-item content button">
					<h1 className="list--item-title">
						Coleccionables
          </h1>
				</div>
				<div onClick={() => handleButtonCategoryCicle(cicle)} className="list-item content button">
					<h1 className="list--item-title">
						Bicicletas
          </h1>
				</div>
				<div className="list-item">
					<h1 className="list--item-title category">
						Colores
          </h1>
					<Select defaultValue="" className="list__select" onChange={handleChangeColor}>
						{colors && colors.map((item) => (
							<Option key={item.id} value={item.name}>{item.name}</Option>
						))}
					</Select>
				</div>
				{/* <GithubPicker /> */}
				<div className="cont">
					{colors && colors.map((item, index) =>
						<Button
							key={index}
							className="cont_color"
							style={{ backgroundColor: item.name, color: item.name }}
							onClick={() => handleChangeColor(item.name)}
						>
							.</Button>
					)}
				</div>
				<div className="list-item">
					<h1 className="list--item-title category">
						Precio
          </h1>
					<Select defaultValue="" className="list__select" onChange={handleChange}>
						{products && products.map((item) => (
							<Option key={item.id} value={item.priceBefore}>{item.priceBefore}</Option>
						))}
					</Select>
				</div>
				<Slider range defaultValue={[20, 50]} disabled={disabled} />
				<div className="price">
					<div className="price--cont">
						$100,000
          </div>
					<div className="price--line">
					</div>
					<div className="price--cont">
						$400,000
          </div>
				</div>
			</div>
		</div>
	);
}

export default ListCascade;