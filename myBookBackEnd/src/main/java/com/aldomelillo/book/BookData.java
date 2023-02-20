package com.aldomelillo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import com.aldomelillo.book.service.BuyerService;
import com.aldomelillo.book.service.PickUpPointService;
import com.aldomelillo.book.model.PickUpPoint;
import com.aldomelillo.book.service.BookingService;

@Component
public class BookData implements CommandLineRunner{

    @Autowired
    BuyerService buyerService;
    @Autowired
    BookingService bookingService;
    @Autowired
    PickUpPointService pickUpPointService;



    @Override
    public void run(String... args) throws Exception {

        PickUpPoint pU1 = new PickUpPoint("Nuvola", "Roma");
        pickUpPointService.savePickUpPoint(pU1);

        PickUpPoint pU2 = new PickUpPoint("Sol", "Seville");
        pickUpPointService.savePickUpPoint(pU2);

        PickUpPoint pU3 = new PickUpPoint("Luna", "Torino");
        pickUpPointService.savePickUpPoint(pU3);


        System.out.println("Aquì estoy!");

    }


    
}
