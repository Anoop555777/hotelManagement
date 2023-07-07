import styled from "styled-components";

import Spinner from "./../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabin";
import Table from "./../../ui/Table";
import Menus from "./../../ui/Menus";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { cabinLoading, cabins = [], error } = useCabins();

  const [searchParam] = useSearchParams();

  const fieldUrl = searchParam.get("discount") || "all";
  const searchUrl = searchParam.get("sortBy") || "name-asc";

  let filterCabins = [];

  if (fieldUrl === "all") filterCabins = cabins;
  if (fieldUrl === "no-discount")
    filterCabins = cabins.filter((cabin) => +cabin.discount === 0);

  if (fieldUrl === "with-discount")
    filterCabins = cabins.filter((cabin) => +cabin.discount !== 0);

  const [sortField, direction] = searchUrl.split("-");
  console.log(sortField);

  const mutater = direction === "asc" ? 1 : -1;

  const sortCabins = filterCabins.sort(
    (a, b) => (a[sortField] - b[sortField]) * mutater
  );

  if (cabinLoading) return <Spinner />;

  return (
    <Menus>
      <Table coloums={"0.6fr 1.8fr 2.2fr 1fr 1fr 1fr"}>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
