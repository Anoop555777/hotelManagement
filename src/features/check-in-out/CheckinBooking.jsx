import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBookingDetails } from "../bookings/useBookingDetails";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "./../settings/useSettings";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const { isLoading, booking = {} } = useBookingDetails();
  const [confirmedPaid, setConfirmedPaid] = useState(false);
  const [includeBreakfast, setIncludeBreakfast] = useState(false);

  const { settings: { breakfastPrice } = {} } = useSettings();
  const { checkIn, checkInLoading } = useCheckin();

  const moveBack = useMoveBack();

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
    isPaid,
  } = booking;

  useEffect(() => {
    if (isPaid) {
      setConfirmedPaid(true);
    }
  }, [isPaid]);

  const optionalBreakfastPrice = breakfastPrice * numNights * numGuests;

  const totalPrices = includeBreakfast
    ? totalPrice + optionalBreakfastPrice
    : totalPrice;

  function handleCheckin() {
    if (!confirmedPaid) return;
    if (includeBreakfast) {
      checkIn({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extraPrice: optionalBreakfastPrice,
          totalPrice: totalPrices,
        },
      });
    } else checkIn({ bookingId, breakfast: {} });
  }

  if (isLoading || checkInLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={includeBreakfast}
            onChange={() => setIncludeBreakfast((state) => !state)}
            id="breakfast"
          >
            Want to add breakfast for {formatCurrency(optionalBreakfastPrice)}
          </Checkbox>
        </Box>
      )}

      <Box>
        <Checkbox
          checked={confirmedPaid}
          onChange={() => setConfirmedPaid((state) => !state)}
          disabled={isPaid ? (includeBreakfast ? false : true) : false}
          id="confirm"
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {formatCurrency(totalPrices)}{" "}
          {includeBreakfast &&
            ` (${formatCurrency(totalPrice)}+ ${formatCurrency(
              optionalBreakfastPrice
            )})`}
        </Checkbox>
      </Box>
      <ButtonGroup>
        <Button disabled={!confirmedPaid} onClick={handleCheckin}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
