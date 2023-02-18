package com.aldomelillo.book.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;



@Entity
@Data
@NoArgsConstructor


public class Buyer {
   
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)

    private Long id;
    private String name;
    private String surname;
    private String creditCard;

    public Buyer(String name, String surname, String creditCard) {
        this.name = name;
        this.surname = surname;
        this.creditCard = creditCard;
    }

    

}
