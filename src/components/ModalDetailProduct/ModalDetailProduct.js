import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button, InputNumber, Form } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { productcart as productCartAction } from "../../services/car/ProductCarAction";

export const ModalDetailProduct = ({ product }) => {

	const { arrayPrpducts } = useSelector(state => state.car);
	const dispatch = useDispatch()
	const [visible, setVisible] = useState(false);

	const showModal = () => {
		setVisible(true)
	};
	const handleOk = () => {
		setVisible(false)
	};

	const onFinish = cant => {
		
			var total = product.priceBefore * cant.cant;
			var value = {cant , product, total}
			let newArray = [...arrayPrpducts,value]
			setVisible(false)
			dispatch(productCartAction.addCar(newArray))
		
	};

	const onFinishFailed = errorInfo => {
	};


	return (
		<div className="ModalDetailProduct">

			<Button className="btn-store" onClick={() => showModal()}>
				<ShoppingCartOutlined /> +
			</Button>
			<Modal
				className="modal"
				visible={visible}
				onOk={() => handleOk()}
				onCancel={() => handleOk()}
			>
				<h1 className="ModalDetailProduct__title">Agregar al carrito.</h1>
				{product &&
					<div className="ModalDetailProduct__content">
						<div className="ModalDetailProduct__content_img">
							<img src={product.image} />
						</div>
						<p className="ModalDetailProduct__content_name">{product.name}</p>
						<p className="ModalDetailProduct__content_name">Precio</p>
						<p className="ModalDetailProduct__content_priceAfter">{product.priceAfter}</p>
						<p className="ModalDetailProduct__content_priceBefore">{product.priceBefore}</p>
						<p className="ModalDetailProduct__content_name">Sub-Categoría:</p>
						<p className="ModalDetailProduct__content_sub">{product.subCategory}</p>
						<p className="ModalDetailProduct__content_name">Color:</p>
						<div className="cont">
							<div className="cont__color" style={{ backgroundColor: product.color }} />
							<p className="ModalDetailProduct__content_sub">{product.color}</p>
						</div>
					</div>
				}
				<Form
					name="basic"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<div className="ModalDetailProduct__cont-btn">
						<span className="cant">
							Cantidad:
						</span>
						<Form.Item
							name="cant"
							rules={[{ required: true, message: 'Campo Obligatorio' }]}
						>
							<InputNumber min={1} max={10} />
						</Form.Item>
					</div>
					<div className="ModalDetailProduct__cont-btn">
						<Button onClick={()=>handleOk()} className="cancel">
							Cancelar
						</Button>
						<Button type="primary" htmlType="submit" className="acept">
							Agregar
						</Button>
					</div>
				</Form>
			</Modal>
		</div>
	);
}
