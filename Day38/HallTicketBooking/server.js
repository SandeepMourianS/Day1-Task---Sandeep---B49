const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

// Data storage (for demonstration purposes)
const rooms = [
  {
    "id":  "1",
  "seatsAvailable" : "10",
  "amenities" : "AC, Wifi , double bed , balcony , heater",
  "pricePerHour" : "1200"
  },
  {
    "id" : "2",
    "seatsAvailable" : "9",
    "amenities": "Non-AC, No-Wifi , double bed ",
    "pricePerHour" : "690"
  }
];
const bookings = [
  {
    "id":"1",
    "customerName" : "Raj kumar",
    "date" : "27-09-2023",
    "startTime" : "10:00 AM",
    "endTime" : "9:00 PM",
    "roomId" : "1"
},
{
  "id": '2',
  "ustomerName" : "Harish khan",
  "date" : "01-10-2023",
  "startTime" : "11:00 AM",
  "endTime" : "10:00PM",
  "roomId" : '2'
}
];

// Create a room
app.post('/createRoom', (req, res) => {
  const { seatsAvailable, amenities, pricePerHour } = req.body;
  const room = {
    id: rooms.length + 1,
    seatsAvailable,
    amenities,
    pricePerHour,
  };
  rooms.push(room);
  res.json(room);
});

// Book a room
app.post('/bookRoom', (req, res) => {
  const { customerName, date, startTime, endTime, roomId } = req.body;

  // Check if the room is available for the given date and time
  const isRoomAvailable = !bookings.some((booking) => {
    return (
      booking.roomId === roomId &&
      booking.date === date &&
      ((startTime >= booking.startTime && startTime < booking.endTime) ||
        (endTime > booking.startTime && endTime <= booking.endTime) ||
        (startTime <= booking.startTime && endTime >= booking.endTime))
    );
  });

  if (!isRoomAvailable) {
    return res.status(400).json({ message: 'Room already booked for this time slot' });
  }

  const booking = {
    id: bookings.length + 1,
    customerName,
    date,
    startTime,
    endTime,
    roomId
  };
  bookings.push(booking);
  res.json(booking);
});

// List all rooms with booked data
app.get('/listRooms', (req, res) => {
  const roomData = rooms.map((room) => {
    const bookedStatus = bookings.some((booking) => booking.roomId === room.id);
    console.log("bookings" , bookings);
    const roomInfo = {
      roomName: `Room ${room.id}`,
      bookedStatus,
      customerName: bookedStatus ? bookings.find((booking) => booking.roomId === room.id).customerName : '',
      date: bookedStatus ? bookings.find((booking) => booking.roomId === room.id).date : '',
      startTime: bookedStatus ? bookings.find((booking) => booking.roomId === room.id).startTime : '',
      endTime: bookedStatus ? bookings.find((booking) => booking.roomId === room.id).endTime : '',
    };
    return roomInfo;
  });

  res.json(roomData);
});

// List all customers with booked data
app.get('/listCustomers', (req, res) => {
  const customerData = bookings.map((booking) => {
    const roomName = `Room ${booking.roomId}`;
    const customerInfo = {
      customerName: booking.customerName,
      roomName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
    return customerInfo;
  });

  res.json(customerData);
});

// List how many times a customer has booked a room
app.get('/customerBookingHistory', (req, res) => {
  const { customerName } = req.query;
  const customerBookingHistory = bookings
    .filter((booking) => booking.customerName === customerName)
    .map((booking) => {
      const roomName = `Room ${booking.roomId}`;
      const bookingInfo = {
        customerName,
        roomName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bookingId: booking.id,
        bookingDate: new Date(booking.date).toLocaleDateString(),
        bookingStatus: 'Booked',
      };
      return bookingInfo;
    });

  res.json(customerBookingHistory);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
