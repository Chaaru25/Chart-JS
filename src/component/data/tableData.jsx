import { Button } from "antd";

export const tableColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width:'20%'
      // render: name => (<div><img src={'src/assets/info.png'} alt='image'/>{name}</div>)
    },
    {
      title: "File Size",
      dataIndex: "size",
      key: "size",
      width:'20%'
    },
    {
      title: "Object Number",
      dataIndex: "objectNumber",
      key: "objectNumber",
      width:'20%'
    },
    {
      title: "Date Modified",
      dataIndex: "dateModified",
      key: "dateModified",
      width:'20%'
    },
    {
      title: "",
      dataindex: "btn",
      key: "btn",
      width:'20%',
      render: ()=>{
        return(
            <Button>Object Investigation</Button>
        )
      }
    },
  ];
export const tableDataSource = [
    {
      name: "SDA",
      size: "8.9GB",
      objectNumber: 10,
      dateModified: "23 June 2020 8:30",
    },
    {
      name: "GPFS",
      size: "11.4GB",
      objectNumber: 3,
      dateModified: "13 March 2020 7:44",
    },
    {
      name: "SATA",
      size: "8.0GB",
      objectNumber: 6,
      dateModified: "28 Feb 2020 9:06",
    },
    {
      name: "JDISK",
      size: "95.4MB",
      objectNumber: 4,
      dateModified: "30 Oct 2019 15:43",
    },
  ];