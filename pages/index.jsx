import React from 'react';
// import withRedux from 'lib/redux';

function HomePage() {
	return (
		<div className="container">
			<div className="background">
				<div className="panel1" />
				<div className="panel2" />
			</div>
			<div className="leftPanel">
				<div className="panel1" />
				<div className="panel2" />
				<div className="panel3" />
				<div className="panel4" />
			</div>
			<div className="rightPanel">
				<div className="panel1" />
				<div className="panel2" />
				<div className="panel3" />
			</div>
			<style jsx>
				{`
					.container {
						height: 100%;
						width: 100%;
						display: flex;
					}
					.background {
						height: 100%;
						width: 100%;
						position: absolute;
						z-index: -1;
					}
					.leftPanel,
					.rightPanel {
						flex: 1;
						height: 100%;
					}
					.background > .panel1 {
						background-color: #999;
						height: 50%;
						width: 100%;
					}
					.background > .panel2 {
						background-color: #ddd;
						height: 50%;
						width: 100%;
					}
					.leftPanel > .panel1 {
						background-color: #999;
						height: 40%;
						width: 100%;
					}
					.rightPanel > .panel1 {
						background-color: #999;
						height: 60%;
						width: 100%;
						border-bottom-left-radius: 19%;
					}
					.leftPanel > .panel2 {
						background-color: #ddd;
						height: 20%;
						width: 100%;
						border-top-right-radius: 50%;
					}
					.rightPanel > .panel2 {
						border-bottom-left-radius: 50%;
						border-bottom-style: solid;
						border-bottom-color: #999;
						border-bottom-width: 10px;
						box-sizing: border-box;
						background-color: #ddd;
						height: 20%;
						width: 100%;
					}
					.leftPanel > .panel3 {
						border-top-right-radius: 50%;
						border-top-style: solid;
						border-top-color: #999;
						border-top-width: 10px;
						box-sizing: border-box;
						background-color: #ddd;
						height: 20%;
						width: 100%;
					}
					.rightPanel > .panel3 {
						border-bottom-left-radius: 50%;
						border-bottom-style: solid;
						border-bottom-color: #999;
						border-bottom-width: 5px;
						box-sizing: border-box;
						background-color: #ddd;
						height: 20%;
						width: 100%;
					}
					.leftPanel > .panel4 {
						border-top-right-radius: 50%;
						border-top-style: solid;
						border-top-color: #999;
						border-top-width: 5px;
						box-sizing: border-box;
						background-color: #ddd;
						height: 20%;
						width: 100%;
					}
				`}
			</style>
			<style global jsx>
				{`
					* {
						margin: 0;
						padding: 0;
					}

					body,
					html,
					#__next {
						height: 100%;
						width: 100%;
					}
				`}
			</style>
		</div>
	);
}

export default HomePage;
