package com.aldomelillo.book.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldomelillo.book.model.Booking;
import com.aldomelillo.book.service.BookingService;

@RestController
@RequestMapping("/order")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/")
    public Booking saveOrder(@RequestBody Booking order) {
        return bookingService.saveOrder(order);
    }

    @GetMapping("/buyer/{id}")
    public Optional<Booking> getOrderById(@PathVariable Long id) {
        return bookingService.getOrderById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        bookingService.deleteorderById(id);
    }
}


