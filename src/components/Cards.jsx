// const Cards = ({ title, category, image }) => {
// 	return (
// 		<div className='card'>
// 			<img src={image} alt='image' width={'100%'} />
// 			<h1>{title}</h1>
// 			<p>{category}</p>
// 			<div className='d-flex aligh-items-center  gap-2'>
// 				<button className='btn btn-secondary'>+</button>
// 				<p className='text fs-2'>0</p>
// 				<button className='btn btn-primary'>-</button>
// 			</div>
// 		</div>
// 	)
// }
import React from 'react'
class Cards extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
			text: '',
		}
		this.changeHandler = this.changeHandler.bind(this)
	}

	increase = () => {
		this.setState(state => ({
			counter: state.counter + 1,
		}))
	}

	decrease = () => {
		this.setState(state => ({
			counter: state.counter - 1,
		}))
	}

	changeHandler(e) {
		this.setState({
			text: e.target.value,
		})
	}
	render() {
		const { image, title, category } = this.props
		const { counter, text } = this.state
		return (
			<div className='card'>
				<img src={image} alt='image' width={'100%'} />
				<p>{text}</p>
				<h1>{title}</h1>
				<p>{category}</p>
				<div className='d-flex aligh-items-center  gap-2'>
					<button className='btn btn-secondary' onClick={this.increase}>
						+
					</button>
					<p className='text fs-2'>{counter}</p>
					<button className='btn btn-primary' onClick={this.decrease}>
						-
					</button>
					<input
						className='form'
						type='text'
						class='form-control'
						placeholder='text'
						onChange={this.changeHandler}
					></input>
				</div>
			</div>
		)
	}
}
export default Cards
