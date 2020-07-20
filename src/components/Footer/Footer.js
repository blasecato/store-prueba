import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { BellOutlined, MailOutlined } from '@ant-design/icons';

import fa from "../../assets/image/fa.png";
import tw from "../../assets/image/tw.png";
import int from "../../assets/image/in.png";
import wa from "../../assets/image/wa.png";

export const Footer = () => {
	const onChange = (e) => {
		
	}
	return (
		<div className="Footer">
			<div className="content">
				<h1 className="content-title">
					Novedades
        </h1>
				<p>
					Dejanos notificarte sobre nuevos productos, promociones, descuentos, eventos, y las mejores noticias pensadas para ti!
        </p>
				<Input placeholder="Correo electrónico"/>
				<div className="content-title">
					<Checkbox onChange={onChange}>He leido los terminos y condiciones y politicas de privacidad</Checkbox>
				</div>
				<Button><BellOutlined />Subscribirme!</Button>
			</div>
			<div className="net">
				<img className="red" src={fa} />
				<img className="red" src={tw} />
				<img className="int" src={int} />
			</div>
			<div className="contact">
				<h1 className="contact-title">
					Contactanos
        </h1>
				<img className="contact-img" src={wa} />
				<div className="contact-email">
					<MailOutlined /> soporteenlinea@autogermana.com.co
				</div>
				<div className="select">
					Autogermana
				</div>
				<div className="select sb">
					BMW
				</div>
			</div>
		</div>
	);
}
