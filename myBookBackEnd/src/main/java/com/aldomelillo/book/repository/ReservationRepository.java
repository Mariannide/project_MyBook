package com.aldomelillo.book.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aldomelillo.book.model.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
