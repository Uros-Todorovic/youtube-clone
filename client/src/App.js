import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div``;

function App() {
	const [darkMode, setdarkMode] = useState(false);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<Menu darkMode={darkMode} setDarkMode={setdarkMode} />
				<Main>
					<Navbar />
					<Wrapper>
						<h1>test</h1>
					</Wrapper>
				</Main>
			</Container>
		</ThemeProvider>
	);
}

export default App;
