package com.aldomelillo.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aldomelillo.book.model.Reservation;
import com.aldomelillo.book.service.ReservationService;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // Metodo per salvare una prenotazione
    @PostMapping("/")
    public Reservation saveReservation(@RequestBody Reservation reservation) {
        return reservationService.saveReservation(reservation);
    }

    // Metodo per elencare tutte le prenotazioni effettuate da un acquirente
    @GetMapping("/buyer/{id}")
    public List<Reservation> getReservationsByBuyer(@PathVariable Long id) {
        return reservationService.getReservationById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationService.deletereservationById(id);
    }
}


