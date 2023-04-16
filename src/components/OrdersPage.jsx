import { useState, useMemo } from 'react';
import Table from './Table';
import FilterBox from './FilterBox';
import Pagination from './Pagination';
import { ordersData } from '../utils/mockData';


function OrdersPage() {
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  const filteredData = useMemo(() => {
    return ordersData.filter((order) => {
      return Object.values(order).some((value) => {
        return value.toString().toLowerCase().includes(searchText.toLowerCase());
      });
    });
  }, [ordersData, searchText]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredData.slice(startIndex, endIndex);
  }, [filteredData, currentPage, pageSize]);

  const pageCount = useMemo(() => {
    return Math.ceil(filteredData.length / pageSize);
  }, [filteredData.length, pageSize]);

  const handleFilterChange = (value) => {
    setSearchText(value);
  };

  return (
    < div >
      <FilterBox value={searchText} onChange={handleFilterChange} />
      <Table data={paginatedData} />
      <Pagination currentPage={currentPage} pageCount={pageCount} onChange={setCurrentPage} />
    </div >
  );
}

export default OrdersPage;