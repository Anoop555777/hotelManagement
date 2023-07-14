import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
const Stats = ({ bookings, confirmedStays, numDays, cabinCount }) => {
  //1 no of bookings
  const numOfBooking = bookings.length;
  //2.Total sales
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  //3.confirmed stays
  const stays = confirmedStays.length;

  //4. num checked in nights / all available nights ( nums days * num cabins)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        icon={<HiOutlineBriefcase />}
        title="Bookings"
        color="blue"
        value={numOfBooking}
      />

      <Stat
        icon={<HiOutlineBanknotes />}
        title="Sales"
        color="green"
        value={formatCurrency(sales)}
      />
      <Stat
        icon={<HiOutlineCalendarDays />}
        title="Check ins"
        color="indigo"
        value={stays}
      />
      <Stat
        icon={<HiOutlineChartBar />}
        title="Occupancy rate"
        color="yellow"
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
};

export default Stats;
