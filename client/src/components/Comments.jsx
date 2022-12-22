import styled from 'styled-components';
import Comment from './Comment';


const Container = styled.div`

`;

const NewComment = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const Avatar = styled.img`
	width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
	border: none;
	border-bottom: 1px solid ${({theme}) => theme.soft};
	background-color: transparent;
	outline: none;
	padding: 5px;
	width: 100%;
	color: ${({theme}) => theme.text};
`;

const Comments = () => {
	return (
		<Container>
			<NewComment>
				<Avatar src="https://i.pinimg.com/originals/d0/02/d7/d002d7595c0b9616bd1e31436dbb2bbc.jpg"/>
				<Input placeholder='Add a comment...'/>
			</NewComment>
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
			<Comment />
		</Container>
	)

};

export default Comments;
