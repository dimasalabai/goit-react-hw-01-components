import styled from 'styled-components'

export const Container = styled.section`
	margin: 20px auto 20px auto;
	max-width: 300px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	box-shadow: 1px 2px 10px 1px #666;
`

export const Description = styled.div`
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		display: block;
		object-fit: cover;
		border-radius: 100%;
		width: 80px;
		height: 80px;
		margin-bottom: 25px;
	}
	p {
		text-align: center;
		&:not(:last-child) {
			margin-bottom: 15px;
		}
		&:nth-child(2) {
			font-size: 20px;
			font-weight: 500;
		}
		&:last-child {
			font-weight: 500;
		}
	}
`

export const Stats = styled.ul`
	display: flex;
	width: 100%;
	background-color: #dedede;
`

export const StatsItem = styled.li`
	flex: 0 1 33.33%;
	padding: 10px 0px;
	border: 1px solid #4e4e4e;

	span {
		display: block;
		text-align: center;
		&:first-child {
			font-weight: 500;
			margin-bottom: 5px;
		}
	}
`
