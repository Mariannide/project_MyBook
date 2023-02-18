package com.aldomelillo.book.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reservations")
public class Reservation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "buyer_name")
    private String buyerName;

    @Column(name = "reservation_date")
    private LocalDate reservationDate;

    @Column(name="payment")
    private boolean payment;

    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private Buyer buyer;

    public Reservation(String buyerName, LocalDate reservationDate,boolean payment, Buyer buyer) {
        this.buyerName = buyerName;
        this.reservationDate = reservationDate;
        this.payment = payment;
        this.buyer = buyer;
    }

    public Reservation() {
        
    }

    public String getBuyerName() {
        return buyerName;
    }

    public void setBuyerName(String buyerName) {
        this.buyerName = buyerName;
    }

    public LocalDate getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public boolean getPayment() {
        return payment;
    }

    public void setPayment(boolean payment) {
        this.payment = payment;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }

    public Reservation(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
    return ("Reservation [id=" + id +", payment=" +payment +", buyer=" + buyer +", reservationDate=" + reservationDate +"] ");


  }

}


