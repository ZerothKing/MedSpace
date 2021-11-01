import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import ProductDetails from '../testComponents/ProductDetails.js';
import UserEvent from '@testing-library/user-event';

afterEach(cleanup); 

describe('Testing Product Details Component', () => {
  
  test("list of Product Details are rendered", async () => {

    render(<ProductDetails />);

    const item1 = await screen.getByText('1');
    const item2 = await screen.getByText('+');
    const item3 = await screen.getByText('-');
    UserEvent.click(item2);
    expect(item2.textContent).toEqual('+');
    expect(item1.textContent).toEqual('2');
    UserEvent.click(item3);
    expect(item1.textContent).toEqual('1');
  }, 30000);
});

