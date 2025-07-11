import {
  BarChartOutlined,
  BellFilled,
  FileOutlined,
  LayoutFilled,
  LogoutOutlined,
  SearchOutlined,
  SettingFilled,
  ShoppingOutlined,
} from "@ant-design/icons";
export const topSideNavItem = [
  {
    key: "1",
    label: "Dashboard",
    icon: <LayoutFilled />,
  },
  {
    key: "2",
    label: "Accounting",
    icon: <BarChartOutlined />,
  },
  {
    key: "3",
    label: "Search",
    icon: <SearchOutlined />,
  },
  {
    key: "4",
    label: "Team",
    icon: <ShoppingOutlined />,
  },
];

export const bottomSideNavItem = [
  {
    key: "5",
    label: "Notification",
    icon: <BellFilled />,
  },
  {
    key: "6",
    label: "Settings",
    icon: <SettingFilled />,
  },
  {
    key: "7",
    label: "Files",
    icon: <FileOutlined />,
  },
  {
    key: "8",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];
