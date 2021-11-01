import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const ProductList = () => {

const [products, setProducts] = useState(null);

  // useEffect(() => {
  //     let isMounted = true;
  //     fetch('apicall')
  //     .then(res => res.json())
  //     .then(data => setProducts(data));
  // }, []);
  useEffect(()=>{
    let isMounted = true; 
    fetch("RandomString")
    .then((res) => {
      return res.json();
    })
    .then((data)=>setProducts(data))
  }, []);

  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <a href="#">
              <EditIcon />
            </a>
            <Button>
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  // const products = [
  //   {_id:2, Stock: 20, name: "Crocin", price: 80},
  //   {_id:7, Stock: 2, name: "Aspirin", price: 180},
  //   {_id:1, Stock: 0, name: "Paracetamol", price: 10}
  // ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <Fragment>

      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductList;