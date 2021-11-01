import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Cart from '../testComponents/Cart.js';

afterEach(cleanup); 

describe('Testing Cart Component', () => {
  
  test("Cart is rendered", async () => {
    window.fetch = jest.fn(() => {
    const obj = [{product:"facemask", image:"#", name:"sjmask", quantity: 22, price: 200}];
   

      return Promise.resolve({
        json: () => Promise.resolve(obj),
      });
    });
    render(<Cart />);
    const item1 = await screen.findAllByText('₹4400');
    expect(item1.length).toEqual(2);
  }, 30000);
});

