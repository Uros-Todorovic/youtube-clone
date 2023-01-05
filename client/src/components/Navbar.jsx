import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;  
  height: 100%;
  padding: 0 20px;
  position: relative;
`;

const Search = styled.div`
  width: 50%;
  position : absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
}
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {


  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchOutlinedIcon />
        </Search>
        <Link to="signin" style={{textDecoration: ' none'}}>
          <Button>
            <AccountCircleOutlinedIcon /> Sign in
          </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar