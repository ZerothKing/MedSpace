import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Dashboard from '../testComponents/Dashboard.js';
import OrderList from '../testComponents/OrderList.js';
import ProductReviews from '../testComponents/ProductReviews.js';
import ProductList from '../testComponents/ProductList.js';
import CheckoutSteps from '../testComponents/CheckoutSteps.js';
import LoginSignUp from '../testComponents/LoginSignUp.js';

describe('Testing dashboard Component', () => {
  test('render dashboard', () => {
    render(<Dashboard/>);
    const item = screen.getByText("Dashboard");
    expect(item).toBeInTheDocument();
  }, 15000);
});

describe('Testing Login SignUp', () => {
  test('Login SignUp check', () => {
    render(<LoginSignUp/>);
    const item = screen.getByText("LOGIN");
    expect(item).toBeInTheDocument();
  }, 15000);
});

describe('Testing checkout Component', () => {
  test('render checkout', () => {
    render(<CheckoutSteps/>);
    const item = screen.getByText("Shipping Details");
    expect(item).toBeInTheDocument();
  }, 15000);
});








