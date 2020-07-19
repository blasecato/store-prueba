import React, { useState, useEffect } from 'react';
import { Popover, Tabs, Button } from 'antd';
import { Link } from "react-router-dom";
import { Home } from "../../scenes/Home/Home";
import logo from "../../assets/image/logo.png";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Lifestyle } from '../../scenes/Lifestyle/Lifestyle';

import url from "../../assets/image/url.png";
import check from "../../assets/image/check.png";


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const TabsHead = () => {

  const content = (
    <div className="car">
      <img className="car_img" src={url} />
      <p className="car_name">Nombre del producto</p>
      <p className="car_ref">Referencia</p>
      <p className="car_numRef">#1234ABCD</p>
      <p className="car_ref">Cantidad</p>
      <p className="car_numRef">x1</p>
      <p className="car_name">$ 1,993,000 </p>
      <Button className="car_btn car_btn-shopy">
        <ShoppingCartOutlined /> Ver carrito
      </Button>
      <Button className="car_btn car_btn-check">
        Checkout
      </Button>
      <div className="car_cont-check">
        <img className="img-check" src={check} />
        <span className="car_price">Agregado al carrito</span>
      </div>
    </div>
  );

  return (
    <div className="TabsHead">
      <Tabs defaultActiveKey="2" onChange={callback}>

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
            <Button className="btn-transparent">
              <ShoppingCartOutlined />
            </Button>
          </Popover>
          <UserOutlined />
        </div>
        <img className="rigth_img" src={logo} />
      </div>
    </div>
  );
}
