package com.aldomelillo.book.model;
import java.time.LocalDate;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Booking {
    

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    private LocalDate orderDate;

    @Column
    private boolean payment;

    @ManyToOne
    private Buyer buyer;

    @ManyToOne
    private PickUpPoint pickUpPoint;

    public Booking(LocalDate orderDate, boolean payment, Buyer buyer, PickUpPoint pickUpPoint) {
        this.orderDate = orderDate;
        this.payment = payment;
        this.buyer = buyer;
        this.pickUpPoint = pickUpPoint;
    }
   
    
  }




