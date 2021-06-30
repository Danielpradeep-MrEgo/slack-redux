import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

function Login() {
	const signIN = () => {
        auth.signInWithPopup(provider)
    };
	return (
		<LoginContainer>
			<LoginInnerContainer>
				<img src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif" />
				<h1>#SLACK ReDeSiGnEd</h1>
				<Button onClick={signIN}>sign in with Google</Button>
			</LoginInnerContainer>
		</LoginContainer>
	);
}

export default Login;

const LoginContainer = styled.div`
	background-color: #f8f8f8;
	height: 100vh;
	display: grid;
	place-items: center;
`;

const LoginInnerContainer = styled.div`
	padding: 50px;
	text-align: center;
	background-color: white;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	> img {
		object-fit: contain;
		height: 400px;
		margin-bottom: 40px;
	}

	> button {
		margin-top: 50px;
		text-transform: inherit !important;
		background-color: #0a8d48 !important;
		color: white !important;
	}
`;
