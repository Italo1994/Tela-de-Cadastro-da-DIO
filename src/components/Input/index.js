import { InputContainer, Row, InputTag } from './styles';

const Input = ( {rotulo} ) => {
	return(
		<InputContainer>
			<Row>
				<InputTag placeholder={rotulo} />
			</Row>
		</InputContainer>
	)
}

export { Input };