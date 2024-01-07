import styled from 'styled-components'

export const Container = styled.table`
	margin: 20px auto 20px auto;
	width: 350px;
	background-color: #fff;
	box-shadow: 1px 2px 10px 1px #666;
	table-layout: fixed;
	border-collapse: collapse;

	thead th {
		width: 33%;
		background-color: #00bcd5;
		color: #fff;
		text-transform: uppercase;
		font-weight: 400;
		&:not(:last-child) {
			border-right: 1px solid #fff;
		}
	}

	th,
	td {
		padding: 10px;
		text-align: center;
		color: #88898d;
		&:not(:last-child) {
			border-right: 1px solid #eeeeee;
		}
	}

	tbody tr:nth-child(2n) {
		background-color: #ecf1f4;
	}

	tbody tr td:first-child {
		text-transform: capitalize;
	}
`
