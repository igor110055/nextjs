import styled, { css } from 'styled-components'

export const Landing = styled.div`
    background: #00fc9e;
    background: -webkit-linear-gradient(to right, #00fc9e, #93F9B9);
    background: linear-gradient(to right, #00fc9e, #93F9B9);
    height: 25vh;
    width: 100%;
    @media screen and (max-width: 960px) {
          height: 25vh;
    }
`;

export const Container = styled.div`
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 50px;
    @media screen and (max-width: 460px) {
        padding: 0 30px;
    }
`;


type TextProps = {
    variant: 'primary' | 'secondary'
};
export const Text = styled.p<TextProps>`
    font-size: clamp(1.2rem, 1.7vw, 1.5em);
    text-align: center;
    letter-spacing: 2px;
    margin-top: -20px;
    margin-bottom: 15px;
    line-height: 24px;
    font-family: 'DM Sans', sans-serif;
    ${({ variant }) => variant === 'primary' && css`
        color: #d8dee9;
	`}
    ${({ variant }) => variant === 'secondary' && css`
        color: #0c0d0d;
    `}
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 10%;
    padding-left: 10%;
`;

export const ANav = styled.a`
    font-weight: 700;
    color: white;
    text-decoration: none;
    transition: 0.3s;
    font-family: "Source Code Pro", monospace;
    font-size: 18px;

    &:hover {
        color: #00fc9e;
        transition: 0.3s;
    }
`;

export const LiNav = styled.li`
    list-style-type: none;
    display: inline-block;
    padding: 10px 20px;

    @media screen and (max-width: 960px) {
        display: none;
    }
`;

export const RText = styled.p`
    text-align: center;
`;

export const Align = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    @media screen and (max-width: 960px) {
        display: grid;
    }
`;

export const GTitle = styled.h1`
    width: 100%;
    letter-spacing: 3px;
    text-align: left;
    margin-top: 5rem;
    font-family: 'Jost', sans-serif;
    font-weight: 900;
    color: white;
    border: 2px solid #00fc9e;
    width: 19%;
    padding: 0 30px;
    
    @media screen and (max-width: 460px) {
        padding: 10 10;
        width: auto;
        text-align: center;
    }
`;

export const GContainer = styled.div`
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    padding: 0 50px;
    @media screen and (max-width: 460px) {
        padding: 0 30px;
    }
`;


export const GText = styled.p`
    font-size: clamp(1.2rem, 1.7vw, 1.5em);
    color: #d8dee9;
    text-align: left;
    letter-spacing: 2px;
    margin-bottom: 15px;
    line-height: 24px;
    font-family: 'DM Sans', sans-serif;
    @media screen and (max-width: 960px) {
        text-align: center;
    }
`;

export const GSpan = styled.span`
    background: #00fc9e;
    font-weight: 700;
    background: linear-gradient(to right, #00fc9e 0%, #93F9B9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const STitle = styled.h1`
    width: 100%;
    letter-spacing: 3px;
    text-align: left;
    margin-top: 5rem;
    font-family: 'Jost', sans-serif;
    font-weight: 900;
    color: white;
    border: 2px solid #00fc9e;
    width: 19%;
    padding: 0 30px;
    
    @media screen and (max-width: 460px) {
        padding: 10 10;
        width: auto;
        text-align: center;
    }
`;

export const Inline = styled.div`
	display: inline-flex;
    gap: 3rem;
    @media screen and (max-width: 960px) {
        display: grid;
        justify-content: center;
        align-items: center;
        gap: 0rem;
    }
`;

export const Box = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
	position: relative;
	left: 0;
    width: 300px;
	padding: 10px 40px;
	background: rgba(255, 255, 255, 0.05);
	box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	backdrop-filter: blur(10px);
	transition: 0.5s;
	color: #fff;
    
	&:hover {
		left: -10px;
        background: rgba(255, 255, 255, 0.01);
	}

    @media screen and (max-width: 960px) {
        left: 0;
        width: auto;
    }
`;

export const BoxP = styled.p`
    font-size: clamp(1.2rem, 1.7vw, 1.5em);
    text-align: center;
    letter-spacing: 2px;
    line-height: 24px;
    font-family: 'DM Sans', sans-serif;
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 10px;
    line-height: 1.2em;
    color: #d8dee9;
`;

export const BoxT = styled.h1`
    font-family: 'Righteous', cursive;
    font-size: 2em;
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const EmailSubBox = styled.div`
    padding: 10vh 30px;
    border-radius: 15px;
    margin-top: 5rem;
    margin-bottom: 3rem;
    background: #00fc9e;
    background: -webkit-linear-gradient(to right, #00fc9e 0%, #93F9B9 100%);
    background: linear-gradient(to right, #00fc9e 0%, #93F9B9 100%);  
`;

export const InputBox = styled.input`
    background: #07090a;
    color: white;
    width: auto;
    box-size: border-box;
    letter-spacing: 1.5px;
    margin: 5px 0;
    font-size: 14px;
    font-weight: 600;
    padding: 10px 10px;
    border: 1px solid #07090a;
    outline: none;

    &:focus {
        border: 1px solid white;
    }
`;

type ButtonProps = {
	variant: 'primary' | 'secondary'
};

export const Button = styled.button<ButtonProps>`
	border: 1px solid #292929;
	font-size: 14px;
	font-family: 'Roboto Mono';
	border-radius: 5px;
	padding: 10px 20px;
	color: #fff;
	margin-left: 10px;
	cursor: pointer;
	${({ variant }) => variant === 'primary' && css`
		background-color: #0566dd;
		transition: 0.5s;
		&:hover {
			background-color: #3992ff;
			transition: 0.5s;
		}
	`}
	${({ variant }) => variant === 'secondary' && css`
		background-color: #292929;
		transition: 0.5s;
		&:hover {
			background-color: #343434;
			transition: 0.5s;
		}
	`}
`;