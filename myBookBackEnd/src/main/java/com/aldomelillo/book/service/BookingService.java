package com.aldomelillo.book.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aldomelillo.book.model.Booking;
import com.aldomelillo.book.repository.BookingRepository;



@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking saveOrder(Booking order) {
        return bookingRepository.save(order);
    }

    public List<Booking> getAllOrders() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getOrderById(Long id) {
        return bookingRepository.findById(id);
    }

    public void deleteorderById(Long id) {
        bookingRepository.deleteById(id);
    }

}

