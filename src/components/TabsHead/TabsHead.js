import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Tabs } from 'antd';
import { Link } from "react-router-dom";
import { Home } from "../../scenes/Home/Home";
import logo from "../../assets/image/logo.png";
import { SearchOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Lifestyle } from '../../scenes/Lifestyle/Lifestyle';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export const TabsHead = () => {

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
            <ShoppingCartOutlined />
            <UserOutlined />
        </div>
          <img className="rigth_img" src={logo}/>
      </div>
    </div>
  );
}
