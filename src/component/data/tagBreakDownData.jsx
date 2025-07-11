import { Tag } from "antd";
export const tagColors = {
    'Untagged': '#b37feb',
    'Files': '#597ef7',
    'New': '#9254de',
    'Modified': '#f759ab',
    'Deleted': '#ff4d4f',
    'Low': '#73d13d',
    'High': '#36cfc9',
    'Medium': '#ffc53d',
    'Custom': '#ff85c0',
    'Simple': '#5cdbd3'
  };
export const tagData = [
    {
      tag: 'Untagged',
      files: 1343,
      directories: 548,
      lastModified: '16 Jul 2020 16:42',
      path: '/dump/user/etc/var/_pan'
    },
    {
      tag: 'Files',
      files: 3895,
      directories: 428,
      lastModified: '28 Feb 2020 9:06',
      path: '/dump/user/etc/var/_pan'
    },
    {
      tag: 'New',
      files: 2338,
      directories: 578,
      lastModified: '15 Jan 2020 22:43',
      path: '/dump/user/etc/var/_pan'
    },
    {
      tag: 'Modified',
      files: 958,
      directories: 796,
      lastModified: '14 Feb 2020 13:00',
      path: '/dump/user/etc/var/_pan'
    },
    {
      tag: 'Deleted',
      files: 324,
      directories: 927,
      lastModified: '13 Mar 2020 7:44',
      path: '/patrice/file/folder/_pan'
    },
    {
      tag: 'Low',
      files: 35,
      directories: 311,
      lastModified: '15 May 2020 8:24',
      path: '/dump/user/etc/var/_pan'
    },
    {
      tag: 'High',
      files: 93,
      directories: 559,
      lastModified: '10 Jan 2020 19:28',
      path: '/sample/data/set/_dump'
    },
    {
      tag: 'Medium',
      files: 88,
      directories: 513,
      lastModified: '12 Jun 2020 9:30',
      path: '/etc/tmp/filer/_panakj'
    },
    {
      tag: 'Simple',
      files: 3952,
      directories: 150,
      lastModified: '12 Jun 2020 9:30',
      path: '/dump/user/etc/var/_pan'
    }
  ];
export  const tagCount = {
    Untagged: 1234,
    Files: 3856,
    New: 2334,
    Modified: 958,
    Deleted: 324,
    Low: 35,
    High: 93,
    Custom: 550,
    Simple: 3952,
  };
 export const tagDataColumns = [
    {
      title: 'Tag Name',
      dataIndex: 'tag',
      key: 'tag',
      render: tag => (
        <Tag color={tagColors[tag] || 'default'} key={tag}>
          {tag}
        </Tag>
      )
    },
    {
      title: 'Files',
      dataIndex: 'files',
      key: 'files'
    },
    {
      title: 'Directories',
      dataIndex: 'directories',
      key: 'directories'
    },
    {
      title: 'Last Modified',
      dataIndex: 'lastModified',
      key: 'lastModified'
    },
    {
      title: 'Path',
      dataIndex: 'path',
      key: 'path',
      ellipsis: true
    }
  ];