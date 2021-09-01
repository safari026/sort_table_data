import React from "react";
import _ from "lodash";
export const useSortTableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  
  const sortItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      const result = _.orderBy(
        sortableItems,
        sortConfig.key,
        sortConfig.direction
      );

      return result;
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };
  return { items: sortItems, requestSort, sortConfig };
};
