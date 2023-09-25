import { Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getAuthor } from "../../API";

function Author() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    setDataSource(getAuthor);
    setLoading(false);
  }, []);

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Author</Typography.Title>
      <Table 
        loading={loading}
        columns={[
          {
            title: "First Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Last Name",
            dataIndex: "surname",
            key: "surname",
          },
          {
            title: "DOB",
            dataIndex: "dob",
            key: "dob"
          }
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5
        }}
      ></Table>
    </Space>
  );
}

export default Author;