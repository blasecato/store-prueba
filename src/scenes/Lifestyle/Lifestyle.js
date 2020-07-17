import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select } from 'antd';
import { Link } from "react-router-dom";
import  ListCascade  from "../../components/ListCascade/ListCascade";
import  url  from "../../assets/image/url.png";
import { ShoppingCartOutlined } from '@ant-design/icons';
import msj from "../../assets/image/Vector.png";


const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export const Lifestyle = () => {

	const	dummyStore = [
		{id: 1, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 2, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 3, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 4, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 5, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 6, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
		{id: 7, name: "Nombre del procuto", subCategory: "Sub-Categoría", price:"$ 100.000",image:url},
	]

	return (
		<div className="Lifestyle">
			<div className="Lifestyle_href">
				Home /
      	<span className="now">
					Lifestyle
        </span>
			</div>
			<div className="Lifestyle_Container">
				<ListCascade/>

				<div className="Lifestyle_Container--box">
						<div className="Lifestyle_Container--box__head">
							<span className="cant">
								20 articulos
							</span>
							<div className="now">
								<span className="now--order">
									Ordenar por:
								</span>
								<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
									<Option value="jack">Jack</Option>
									<Option value="lucy">Lucy</Option>
									<Option value="disabled" disabled>
										Disabled
									</Option>
									<Option value="Yiminghe">yiminghe</Option>
								</Select>
							</div>
						</div>
						<div className="Lifestyle_Container__store">
								{dummyStore && dummyStore.map((item, index) =>
									<div className="Lifestyle_Container__store--item" key={index}>
											<img className="img" src={item.image}/>
											<div className="data-article">
												<div className="data-article--data">
													<span className="name">
														{item.name}
													</span>
													<span className="subCategory">
														{item.subCategory}
													</span>
													<span className="price1">
														{item.price}
													</span>
													<span className="price2">
														{item.price}
													</span>
												</div>
												<div className="data-article--btn">
													<Button className="btn-store">
														<ShoppingCartOutlined /> +
													</Button>
												</div>
											</div>
									</div>
								)

								}
						</div>
							<Button className="btn-msj">
								<img className="img" src={msj}/>
								Hablemos por chat
							</Button>
				</div>
      </div>
			

		</div>
	);
}