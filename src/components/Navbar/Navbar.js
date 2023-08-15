
import NetflixLogo from '../../assets/images/Netflix_Logo_RGB.png';
import { MdSearch } from "react-icons/md";
import styled from 'styled-components';
import { useScroll } from '../../hooks/useScroll';
function Navbar(props){
    const [scrollY]= useScroll();
    return (
        <Navigation style={scrollY <50 ? {backgroundColor: 'transparent'}: {backgroundColor: 'var(--color--background'}}>
            <div className='navContainer'>
                <div className='logo'>
                    <img src={NetflixLogo} alt="logo" />
                </div>
                <div className='navSearch'>
                    <MdSearch className='iconSearch'/>
                    <input type="text" placeholder="Input title to search"/>
                </div>
            </div>

        </Navigation>
    )
}
export default Navbar;

const Navigation = styled.div`
    z-index: 100;
    position: fixed;
    width: 100%;
    height: var(--height-navbar);
    padding: 8px 20px;
    transition-timing-function: ease-in;
    transition: all 1s;
    top: 0;

    .navContainer {
        background-color: #222;//transparent
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: 100%; 

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: 100px;
    }
    .logo {
        width: 120px;
        cursor: pointer;
        img {
        width: 100%;
        }
    }
    .navSearch {
        color: var(--color-white);
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;
        &:hover .iconSearch {
          color: var(--color-white);
        }
        .iconSearch {
            width: 20px;
            height: 20px;
            cursor: pointer;
            transform: translateX(24px) translateY(10px);
            color: #bbb;
          }
        input {
            font-size: 14px;
            border: none;
            color: var(--color-white);
            outline: none;
            width: 0px;
            padding: 10px;
            background: var(--color-background);
            border: 1px solid #fff;
            transition: width 0.5s;
            cursor: pointer;
            opacity: 0;
    
            &:focus {
              padding-left: 26px;
              width: 300px;
              cursor: text;
              opacity: 1;
              border-radius: 4px;
            }
          }
`;
