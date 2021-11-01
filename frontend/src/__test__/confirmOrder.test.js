import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import ConfirmOrder from '../testComponents/confirmOrder.js';

afterEach(cleanup); 

describe('Testing confirm order Component', () => {
  
  test("list of confirm order are rendered", async () => {
    window.fetch = jest.fn(() => {
    const obj = {
      userData:{name: "sanjkeet"}, 
      cartData:[{product:"facemask", image:"#", name:"sjmask", quantity: 22, price: 200}],
      shippingData: {address: "22b baker street", city: "london", state:"london", pincode:"000111", country:"Uk"}
    };

      return Promise.resolve({
        json: () => Promise.resolve(obj),
      });
    });
    render(<ConfirmOrder />);
    const item2 = await screen.findByText('sjmask');
    expect(item2).toBeInTheDocument();
  }, 30000);
});

