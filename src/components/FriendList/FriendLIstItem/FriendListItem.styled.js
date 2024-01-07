import styled from 'styled-components'

export const Friend = styled.li`
	display: flex;
	list-style: none;
	padding: 5px 0 5px 15px;
	justify-content: flex-start;
	align-items: center;
	span {
		display: block;
		margin-right: 10px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: ${props => (props.$isOnline ? 'green' : 'red')};
	}

	img {
		margin-right: 20px;
	}

	p {
		font-size: 18px;
	}
`
