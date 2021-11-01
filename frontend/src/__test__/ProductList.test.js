import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import Dashboard from '../testComponents/Dashboard.js';
import OrderList from '../testComponents/OrderList.js';
import ProductReviews from '../testComponents/ProductReviews.js';
import ProductList from '../testComponents/ProductList.js';

describe('Testing product list Component', () => {
    test("list of products are rendered", async () => {
        window.fetch = jest.fn(() => {
            const products = [
            {_id:2, Stock: 20, name: "Crocin", price: 80},
            {_id:7, Stock: 2, name: "Aspirin", price: 180},
            {_id:1, Stock: 0, name: "Paracetamol", price: 10},
            ];
          return Promise.resolve({
            json: () => Promise.resolve(products),
          });
        });
        render(<ProductList />);
        const prodName1 = await screen.findByText("Crocin");
        const prodName2 = await screen.findByText("Aspirin");
        const prodName3 = await screen.findByText("Paracetamol");
        expect(prodName1).toBeInTheDocument();
        expect(prodName2).toBeInTheDocument();
        expect(prodName3).toBeInTheDocument();
      }, 30000);
});