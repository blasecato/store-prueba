import React, { useState, useEffect } from 'react';
import { Modal, Button, InputNumber } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Item from 'antd/lib/list/Item';

export const ModalDetailProduct = ({ product }) => {

	const [visible, isVisible] = useState(false);

	const showModal = () => {
		isVisible(true)
	};

	const handleOk = () => {
		isVisible(false)
	};

	const handleCancel = () => {
		isVisible(false)
	};

	const onChange = (value) => {
		console.log('changed', value);
	}

	return (
		<div className="ModalDetailProduct">

			<Button className="btn-store" onClick={() => showModal()}>
				<ShoppingCartOutlined /> +
			</Button>
			<Modal
				className="modal"
				visible={visible}
				onOk={() => handleOk()}
				onCancel={() => handleCancel()}
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
				<div className="ModalDetailProduct__cont-btn">
					<span className="cant">
						Cantidad:
					</span>
					<InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
				</div>
				<div className="ModalDetailProduct__cont-btn">
					<Button className="cancel">
						Cancelar
					</Button>
					<Button className="acept">
						Agregar
					</Button>
				</div>
			</Modal>
		</div>
	);
}
