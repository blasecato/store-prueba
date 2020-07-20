import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Popover, Tabs, Button, Menu, Empty } from 'antd';
import { Link } from "react-router-dom";
import { Home } from "../../scenes/Home/Home";
import logo from "../../assets/image/logo.png";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { Lifestyle } from '../../scenes/Lifestyle/Lifestyle';
import { productcart as productCartAction } from "../../services/car/ProductCarAction";

import url from "../../assets/image/url.png";
import check from "../../assets/image/check.png";

const { SubMenu } = Menu;
const { TabPane } = Tabs;

export const TabsHead = ({history}) => {

  const { arrayPrpducts } = useSelector(state => state.car);
  const dispatch = useDispatch()
  const cart = arrayPrpducts && arrayPrpducts.length;

  const content = (
    <div>
      {arrayPrpducts && arrayPrpducts.length > 0 ?
        <div>
          {arrayPrpducts.map((item, index) =>
            <div key={index} className="car">
              <img className="car_img" src={item.product.image} />
              <p className="car_name">{item.product.name}</p>
              <p className="car_ref">Referencia</p>
              <p className="car_numRef">#1234ABCD</p>
              <p className="car_ref">Cantidad</p>
              <p className="car_numRef">x{item.cant.cant}</p>
              <p className="car_name">$ {item.product.priceBefore}</p>
            </div>
          )}
          <div className="car">
            <Link className="car_btn car_btn-shopy" to="/car">
              <ShoppingCartOutlined /> Ver carrito
            </Link>
            <Button className="car_btn car_btn-check">
              Checkout
            </Button>
            <div className="car_cont-check">
              <img className="img-check" src={check} />
              <span className="car_price">Agregado al carrito</span>
            </div>
          </div>
        </div>
        :
        <div className="car">
          <Empty
            description={
              <span>
                Carrito Vacio
                </span>
            }
          />
        </div>
      }
    </div>
  );

  return (
    <div className="TabsHead">
      <div className="menu">
        <Menu>
          <SubMenu icon={<MenuOutlined />}>
            <Menu.ItemGroup>
              <Menu.Item key="setting:1">Accesorios</Menu.Item>
              <Menu.Item key="setting:2">Lifestyle</Menu.Item>
              <Menu.Item key="setting:3">Vehiculos usados</Menu.Item>
              <Menu.Item key="setting:4">Novedades</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
      <Tabs defaultActiveKey="2" >
        <TabPane tab="Accesorios para carros" key="1">
          Accesorios para carros
        </TabPane>
        <TabPane tab="Lifestyle" key="2">
          <Lifestyle />
        </TabPane>
        <TabPane tab="Ofertas" key="3">
          Ofertas
        </TabPane>
        <TabPane tab="Novedades" key="4">
          Novedades
        </TabPane>
      </Tabs>
      <div className="rigth">
        <div className="rigth_contIcon">
          <SearchOutlined />
          <Popover placement="bottom" content={content} trigger="click">
            <Button className={`btn-transparent btn-transparent--${cart > 0 && "cart"}`}>
              <ShoppingCartOutlined />{ cart > 0 && cart}
            </Button>
          </Popover>
          <UserOutlined className="icon-user" />
        </div>
        <img className="rigth_img" src={logo} />
      </div>
    </div>
  );
}
