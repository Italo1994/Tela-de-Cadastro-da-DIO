import React from 'react';

import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';
import { Wrapper, Container, Row, Column, BuscarInputContainer, Menu, UserPicture, Input, MenuRight } from './styles';

const Header = () => {
	return(
		<Wrapper>
			<Container>
				<Row>
					<img src={logo} alt="Logo da DIO" />
					<BuscarInputContainer>
						<Input placeholder="Buscar..." />
					</BuscarInputContainer>
					<Menu href="#" >Live Code</Menu>
					<Menu href="#">Global</Menu>
				</Row>
				<Row>
					<MenuRight href="#">Home</MenuRight>
					<Button title="Entrar" />
					<Button title="Cadastrar" />
				</Row>
			</Container>
		</Wrapper>
	);
}

export { Header };