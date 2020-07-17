import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, Slider, Switch } from 'antd';
import { GithubPicker } from 'react-color';

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

const ListCascade = () => {

    const [ disabled, isDisabled ] = useState(false)

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
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="list-item content">
                    <h1 className="list--item-title">
                        Fashion
                    </h1>
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="list-item content">
                    <h1 className="list--item-title">
                        Electrónica
                    </h1>
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Miscelaneos
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="list-item content">
                    <h1 className="list--item-title">
                        Miscelaneos
                    </h1>
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                </div>
                <div className="list-item content">
                    <h1 className="list--item-title">
                        Coleccionables
                    </h1>
                </div>
                <div className="list-item content">
                    <h1 className="list--item-title">
                        Bicicletas
                    </h1>
                </div>
                <div className="list-item">
                    <h1 className="list--item-title category">
                        Colores
                    </h1>
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">Colores</Option>
                    </Select>
                </div>
                <GithubPicker />
                <div className="list-item">
                    <h1 className="list--item-title category">
                        Precio
                    </h1>
                    <Select defaultValue="lucy" className="list__select" onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy"></Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">Colores</Option>
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
                        $100,000
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default ListCascade;