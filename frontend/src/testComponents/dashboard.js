import { Typography } from "@material-ui/core";

const Dashboard = () => {

  let outOfStock = 0;

  let totalAmount = 0;

  const products = {
      length : 10
  }
  
  const users = {
      length : 10
  }

  const orders = {
      length : 10 
  }

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <a href="#">
              <p>Product</p>
              <p>{products && products.length}</p>
            </a>
            <a href="#">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </a>
            <a href="#">
              <p>Users</p>
              <p>{users && users.length}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;