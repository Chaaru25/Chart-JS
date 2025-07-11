import React from "react";
import { tagColors, tagCount } from "../data/tagBreakDownData";

const TagColorBar = () => {
  const total = Object.values(tagCount).reduce((sum, count) => sum + count, 0);
  console.log(total, "total");
  return (
    <div className="tag">
      {Object.entries(tagCount).map(([tag, count]) => {
        const widthPercent = (count / total) * 100;
        return (
          <div
            key={tag}
            title={`${tag}:${count}`}
            style={{
              backgroundColor: tagColors[tag] || "#d9d9d9",
              width: `${widthPercent}%`,
              height: "100%",
            }}
          ></div>
        );
      })}
    </div>
  );
};
export default TagColorBar;
