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
import com.aldomelillo.book.service.BookingService;
import com.aldomelillo.book.service.BuyerService;


@RestController
@RequestMapping("/api/booking")
@CrossOrigin //serve per le fetch
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BuyerService buyerService;

    
    @PostMapping("/create") //vengono creati sia utenti che i punti di ritiro. I buyer si creano, i punti si trovano tramite id
    public ResponseEntity<?> saveBooking(@RequestBody Booking payload){
      Buyer buyer = buyerService.findByEmail(payload.getBuyer().getEmail()); //Questo è il buyer che ha compilato il form
       if(buyer == null) {
       buyer = buyerService.saveBuyer(payload.getBuyer());//se esiste un buyer con la mail inserita. Se non esiste viene creato new buyer(l.37)
       
       }
       payload.setBuyer(buyer);

      return new ResponseEntity<>(bookingService.saveBooking(payload),HttpStatus.CREATED); //prendimi il carico dal front end, prendimi il buyer e salvalo, dopo di che mi salvi tutto nella tab Booking

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


