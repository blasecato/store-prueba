import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from '../../../services/Auth/AuthActions';


export const Home = () => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())
	}

	return (
		<div className="SingUp">
			hola home iniciaste sesion

			<Button className="button" onClick={()=> handleLogout()}>Cerrar sesión</Button>

		</div>
	);
}
