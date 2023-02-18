package com.aldomelillo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.aldomelillo.book.model.Buyer;
import com.aldomelillo.book.model.Reservation;
import com.aldomelillo.book.service.BuyerService;
import com.aldomelillo.book.service.ReservationService;

@Component
public class BookData implements CommandLineRunner{

    @Autowired
    BuyerService buyerService;
    @Autowired
    ReservationService reservationService;


    @Override
    public void run(String... args) throws Exception {
        
        Buyer b1 = new Buyer("Giorgio", "Leo", "IT366363663");
        buyerService.saveBuyer(b1);
        Buyer b2 = new Buyer("Matteo", "Bruno", "IT3737737373");
        buyerService.saveBuyer(b2);
        Buyer b3 = new Buyer("Zara", "Dahuadi", "IT2828828282");
        buyerService.saveBuyer(b3);

        Reservation r1 = new Reservation(null, null, true, b3);
        reservationService.saveReservation(r1);



        System.out.println("sono arrivato qui!");

    }


    
}
