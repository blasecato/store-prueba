import React, { useState, useEffect } from 'react';
import { Button, Select, Slider, InputNumber, Form } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { product as productActions, product } from "../../services/product/productActions";
import { category as categoryActions, category } from "../../services/category/categoryActions";

const { Option } = Select;

const ListCascade = ({ menor, mayor }) => {

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
	const [color, setColor] = useState(undefined)
	const [inputValueOne, setInputValueOne] = useState(0)
	const [inputValueTwo, setInputValueTwo] = useState(0)

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

	useEffect(() => {
		setInputValueOne(menor)
		setInputValueTwo(mayor)
	}, [menor,mayor])

	const handleChangeCategory = (value) => {
		setCategory(value)
		var category = value
		const values = { category, subCategory }
		dispatch(productActions.getSubcategory(values))
	}

	const handleChange = (value) => { }

	const handleChangeFashion = (value) => {
		var subCategory = value;
		var values = { subCategory, category }
		setSubCategory(value)
		dispatch(productActions.getSubcategory(values))
	}

	const handleChangeColor = (value) => {
		setColor(value);

		var values = { value, category, subCategory }
		dispatch(productActions.getColor(values))
	}

	const handleButtonCategoryColection = (colection) => {
		const value = colection.name
		setSubCategory(undefined)
		setCategory(value)
		dispatch(productActions.get(value))
	}

	const handleButtonCategoryCicle = (cicle) => {
		const value = cicle.name
		setSubCategory(undefined)
		setCategory(value)
		dispatch(productActions.get(value))
	}


	const onAfterChange = value => {
		setInputValueOne(value[0])
		setInputValueTwo(value[1])
		var min = value[0]
		var max = value[1]
		var values = {min,max}
		dispatch(productActions.getRange(values))
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
				{inputValueOne &&
					<Slider
						range
						min={menor}
						max={mayor}
						onAfterChange={onAfterChange}
						defaultValue={[inputValueOne, inputValueTwo]}
					/>
				}
				<div className="price">
					<InputNumber
						disabled={true}
						className="price--cont"
						value={inputValueOne}
						defaultValue={menor}
					/>
					<div className="price--line"></div>
					<InputNumber
						disabled={true}
						className="price--cont"
						value={inputValueTwo}
						defaultValue={mayor}
					/>
				</div>

				<div className="search">
					Busqueda
							{category &&
						<div className="search-cat">
							Categoria: {category}
						</div>
					}
					{subCategory &&
						<div className="search-cat">
							Categoria: {subCategory}
						</div>
					}
					{color &&
						<div className="search-cat">
							Categoria: {color}
						</div>
					}
				</div>

			</div>
		</div>
	);
}

export default ListCascade;