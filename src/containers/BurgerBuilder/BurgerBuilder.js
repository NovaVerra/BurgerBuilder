import React, { Component } from 'react'

import Aux from '../../hoc/Aux'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
	bacon: 0.7,
	cheese: 0.4,
	salad: 0.5,
	meat: 1.3
}

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			bacon: 0,
			cheese: 0,
			salad: 0,
			meat: 0
		},
		totalPrice: 4.00
	}

	addIngredientHandler = (type) => {
		const updatedCount = this.state.ingredients[type] + 1
		const updatedIngredient = {
			...this.state.ingredients
		}
		updatedIngredient[type] = updatedCount
		const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
		this.setState({ingredients: updatedIngredient, totalPrice: updatedPrice})
	}

	removeIngredientHandler = (type) => {
		if (this.state.ingredients[type] <= 0)
			return
		const updatedCount = this.state.ingredients[type] - 1
		const updatedIngredient = {
			...this.state.ingredients
		}
		updatedIngredient[type] = updatedCount
		const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
		this.setState({ingredients: updatedIngredient, totalPrice: updatedPrice})
	}

	render () {
		const disabledInfo = {
			...this.state.ingredients
		}
		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0
		}
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice} />
			</Aux>
		)
	}
}

export default BurgerBuilder
