import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme';

import { Menu, Navbar } from './components/index';
import { Home, Video } from './pages/index';
import SignIn from './pages/SignIn';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
	padding: 22px 96px;
`;

function App() {
	const [darkMode, setdarkMode] = useState(false);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<BrowserRouter>
					<Menu darkMode={darkMode} setDarkMode={setdarkMode} />
					<Main>
						<Navbar />
						<Wrapper>
							<Routes>
								<Route path="/">
									<Route index element={<Home />} />
									<Route path="signin" element={<SignIn />} />
									<Route path="video">
										<Route path=":id" element={<Video />} />
									</Route>
								</Route>
							</Routes>
						</Wrapper>
					</Main>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;
