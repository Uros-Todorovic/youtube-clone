import styled from 'styled-components';


const Container = styled.div`
	display: flex;
  gap: 10px;
  margin: 30px 0px;
`;


const Avatar = styled.img`
	width: 50px;
  height: 50px;
  border-radius: 50%;
`;


const Details = styled.div`
	display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`;


const Name =  styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date =  styled.span`
  font-size: 13px;
   font-weight: 400;
   color: ${({theme}) => theme.textSoft};
   margin-left: 5px;
`;

const Text =  styled.span`

`;

const Comment = () => {

  return (
    <Container>
      <Avatar src="https://i.pinimg.com/originals/d0/02/d7/d002d7595c0b9616bd1e31436dbb2bbc.jpg"/>
      <Details>
        <Name>Yoda <Date>1 day ago</Date></Name>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, facilis veritatis reiciendis sit ad exercitationem corporis minus quibusdam perferendis aperiam, ducimus adipisci laborum repellat ea blanditiis laboriosam explicabo incidunt porro.</Text>
      </Details>
    </Container>
  )
}

export default Comment