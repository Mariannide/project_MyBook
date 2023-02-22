package com.aldomelillo.book.model;
import jakarta.persistence.Column;
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
    @Column
    private Long id;

    @Column
    private String name;

    @Column
    private String surname;

    @Column(unique = true)// se l'email non esiste già salva l'utente, se l'email esiste lo prende ma non lo memorizza nel database
    private String email;

    @Column
    private String creditCard;

    public Buyer(String name, String surname, String email, String creditCard) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.creditCard = creditCard;
    }

    
    
    

    
}
