import React, { useState } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import Logo from '../logo.svg';

function TopBar() {
    const [activeItem, setActiveItem] = useState('home');
    let routerHistory = useHistory();
    const handleItemClick = (e, { name }) => {
        switch (name) {
            case 'about': routerHistory.push('/about'); break;
            case 'home':
            default: routerHistory.push('/');
        }
        setActiveItem(name);
    }

    return (
        <Menu pointing secondary size='large'>
            <Container>
                <Menu.Item>
                    <img src={Logo} alt="React Logo" />
                </Menu.Item>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='about'
                    active={activeItem === 'about'}
                    onClick={handleItemClick}
                />
            </Container>
        </Menu>
    )
}

export default TopBar;