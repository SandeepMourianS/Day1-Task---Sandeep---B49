import {
  ProfileOutlined,
  BookOutlined,
  StarOutlined
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useContext, useEffect, useState } from "react";
import { getBooks } from "../../API";

  import { DataContext } from "../../Components/DataContext";
  
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
     
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  function Dashboard() {
    return (
      <Space direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <BookOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Books"}
            value={252}
          />
          <DashboardCard
            icon={
              <ProfileOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Users"}
            value={465}
          />
          <DashboardCard
            icon={
              <StarOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Review"}
            value={153}
          />
        </Space>
        <Space>
          <RecentBooks />
          <DashboardChart />
        </Space>
      </Space>
    );
  }
  
  function DashboardCard({ title, value, icon }) {
    return (
      <Card style={{width: 380 , textAlign: "center"}}>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    );
  }

  function RecentBooks() {
    const { dataSource , setDataSource } = useContext(DataContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      setLoading(true);
      if(getBooks){
        setDataSource(getBooks);
        setLoading(false);
      }
    },[])

    console.log("data source DashBoard" ,dataSource);

    return (
      <>
        <Typography.Text>Recent Books</Typography.Text>
        <Table
        style={{width: 530}}
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
            key: "id",
          },
          {
            title: "Author",
            dataIndex: "author",
            key: "id",
          },
          {
            title: "ISBN",
            dataIndex: "isbn",
            key: "id",
          },
          {
            title: "Release Date",
            dataIndex: "releaseDate",
            key: "id",
          },
          {
            title: "Pages",
            dataIndex: "pages",
            key: "id",
          }
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
      </>
    );
  }
  
  function DashboardChart() {
    const [books, setBooks] = useState({
      labels: [],
      datasets: [],
    });
  
    useEffect(() => {
        const labels = getBooks.map((cart) => {
          return `User-${cart.id}`;
        });
        const data = getBooks.map((cart) => {
          return cart.pages;
        });
  
        const dataSource = {
          labels,
          datasets: [
            {
              label: "User",
              data: data,
              backgroundColor: "rgba(255, 0, 0, 1)",
            },
          ],
        };
  
        setBooks(dataSource);
    }, []);
  
    const options = {
      responsive: true,
      plugins: { 
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Books",
        },
      },
    };
   
    return (
      <Card style={{ width: 600, height: 350 , marginLeft: 10}}>
        <Bar options={options} data={books}/>
      </Card>
    );
  }
  export default Dashboard;