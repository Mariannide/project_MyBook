package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aldomelillo.book.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    
}
