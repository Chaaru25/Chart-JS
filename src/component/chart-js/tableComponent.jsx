import React from 'react';
import { Table, Tag } from 'antd';
import { tagColors } from '../data/tagBreakDownData';
import TagColorBar from './horizontalBar';





const TableComponent = (props) => {
  return (
    <div className='table-bg'>
      <p className='heading'>{props.title}</p>
      
      {/* Colored Tag Legend */}
      {props?.tag &&
      <>
      <TagColorBar />
      <div className="tag-legend" style={{ display: 'flex', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
        {Object.entries(tagColors).map(([label, color]) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div style={{
              width: 40,
              height: 15,
              backgroundColor: color,
            }} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      </>}

      {/* Data Table */}
      <Table
        dataSource={props?.dataSource}
        columns={props?.columns}
        pagination={{ pageSize: 6 }}
        size={props?.size}
      />
    </div>
  );
};

export default TableComponent;
