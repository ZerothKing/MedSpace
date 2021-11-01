import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import OrderList from '../testComponents/OrderList.js';

describe('Testing OrderList Component', () => {
  test('render Order List', () => {
    render(<OrderList/>);
    expect(true).toBeTruthy();
  }, 15000);

test("list of orders are rendered", async () => {
    window.fetch = jest.fn(() => {
      const orders = [
        {
            _id : 1,
            orderItems : {
                length : 2
            },
            totalPrice : 300,
            orderStatus : "Processing"
        },
      ];
      return Promise.resolve({
            json: () => Promise.resolve(orders),
          });
    });
    render(<OrderList />);
    const temp1 = await screen.findByText("Processing");
    expect(temp1).toBeInTheDocument();
  }, 30000);

});