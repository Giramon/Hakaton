import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go }) => (
	<Panel id={id}>
		
			<Div>
				<h1>KAGO</h1>
				<p>Наше приложения создано для людей, которые не определились с выбором колледжа или вуза</p>
				<p>Мы поможем найти подходящее заведение для обучения в городе Челябинск</p>
				<p>Изменить все шрифты и придумать доп текст</p>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="glav">
					Выбор Вуза или Колледжа
				</Button>
			</Div>
		
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
