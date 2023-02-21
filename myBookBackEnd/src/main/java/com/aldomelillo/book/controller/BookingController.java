package com.aldomelillo.book.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldomelillo.book.model.Booking;
import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.model.PickUpPoint;
import com.aldomelillo.book.service.BookingService;
import com.aldomelillo.book.service.BuyerService;
import com.aldomelillo.book.service.PickUpPointService;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin //serve per le fetch
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BuyerService buyerService;

    @Autowired
    private PickUpPointService pickUpPointService;

    @PostMapping("/create") //vengono creati sia utenti che i punti di ritiro. I buyer si creano, i punti si trovano tramite id
    public ResponseEntity<?> saveBooking(@RequestBody Booking booking)
     {  Buyer bu = buyerService.findBuyerById(booking.getBuyer().getId());
        if (bu == null) {
            bu = buyerService.saveBuyer(booking.getBuyer());
        }

        PickUpPoint pup = pickUpPointService.findPointById(booking.getPickUpPoint().getId());

        if (pup != null) {booking.setPickUpPoint(pup);
            booking.setBuyer(bu);
            Booking b = bookingService.saveBooking(booking);

            return new ResponseEntity<>(b, HttpStatus.CREATED);
        }

        return new ResponseEntity<>("Not found", HttpStatus.BAD_REQUEST);
    }

    
    @GetMapping("/booking/{id}")
    public Optional<Booking> getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        bookingService.deleteBookingById(id);
    }
}


