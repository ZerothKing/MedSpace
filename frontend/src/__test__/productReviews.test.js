import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import ProductReviews from '../testComponents/ProductReviews.js';

describe('Testing product reviews Component', () => {
  
  test('render Product Reviews', () => {
    render(<ProductReviews/>);
    const item = screen.getByText("ALL REVIEWS");
    expect(item).toBeInTheDocument();
  }, 15000);

  test("list of reviews are rendered", async () => {
    window.fetch = jest.fn(() => {
    const reviews = [
    {
      _id : 1,
      rating : 3,
      comment : "This product is not very good",
      name : "Ankush Tripati"
    },
    {
      _id : 2,
      rating : 4,
      comment : "Needs some time but works well",
      name : "Arush Nanda"
    },
  ];

      return Promise.resolve({
        json: () => Promise.resolve(reviews),
      });
    });
    render(<ProductReviews />);
    const userName1 = await screen.findByText('Ankush Tripati');
    const userName2 = await screen.findByText('Arush Nanda');
    expect(userName1).toBeInTheDocument();
    expect(userName2).toBeInTheDocument();
  }, 30000);
});