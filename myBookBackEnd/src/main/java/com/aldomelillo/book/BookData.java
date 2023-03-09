package com.aldomelillo.book;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import com.aldomelillo.book.service.BuyerService;
import com.aldomelillo.book.service.PickUpPointService;
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
         
        
        
        

        System.out.println("Aquì estoy!");

    }


    
}
